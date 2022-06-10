import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';
import Roboto from '~/components/fonts/Roboto';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { firestoreApi } from '~/services/api/firestore';
import Navigation from '~/Navigation';

export default function App() {
  return (
    <ApiProvider api={firestoreApi}>
      <SafeAreaProvider>
        <RootSiblingParent>
          <Roboto>
            <Navigation />
          </Roboto>
        </RootSiblingParent>
      </SafeAreaProvider>
    </ApiProvider>
  );
}
