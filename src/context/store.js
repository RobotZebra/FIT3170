import { configureStore } from '@reduxjs/toolkit/query/react';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { firestoreApi } from '~/services/firestore';

/* THERE SHOULD ONLY BE ONE STORE IN THIS SYSTEM */
/* A store is an RTK Query tool that allows us to elegantly store global state */
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [firestoreApi.reducerPath]: firestoreApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firestoreApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
