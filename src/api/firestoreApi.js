import { getDocs, getFirestore, query, collection } from '@firebase/firestore';
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebaseApp from '~/services/firebase/config';

/* 
  This is an 'API Slice'. 
  It defines a neat way to interact with an API, 
  and generates hooks for us to use in our components
*/
export const firestoreApi = createApi({
  reducerPath: 'firestoreApi',
  // baseQuery isn't used here, but it's normally used to define
  // base URLs and shared request headers
  baseQuery: fakeBaseQuery(),
  // function that returns an object that defines our endpoints. each endpoint results in an auto generated hook
  endpoints: (builder) => ({
    // this endpoint will pull all practitioners from the DB
    getPractitioners: builder.query({
      // this is the function that performs the request
      queryFn: async () => {
        const db = getFirestore(firebaseApp);
        const q = query(collection(db, 'practitioner-collection'));
        try {
          const querySnapshot = await getDocs(q);
          console.log(querySnapshot);
          // you must return a { data: object } if query is successful
          return {
            data: querySnapshot,
          };
        } catch (err) {
          // you must return { error: object } if query is not successful
          return { error: err };
        }
      },
      // you can edit the response before returning it with transformResponse
      transformResponse: (response) => response,
      // using this function you can perform tasks before, during or after the query
      onQueryStarted: async (args, { queryFulfilled }) => {
        // do things here before the query is complete
        console.log(args);

        // waiting for the query to be complete
        const { data } = await queryFulfilled;

        // do things here after the query is complete, like storing data in local storage
        await AsyncStorage.setItem('practitioner-collection', JSON.stringify(data));
      },
    }),
  }),
});

// hooks are generated for us, available when we destructure the API slice.
// now you use them in your react functional components
export const { useGetPractitionersQuery } = firestoreApi;
