import React from 'react';
import {View} from 'react-native';

import {Navigation} from './navigation';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './redux';

import styles from './styles';

const App = () => {
  return (
    // <View style={styles.container}>
    //   <Provider store={store}>
    //     <PersistGate persistor={persistStore(store)}>
    //       <Navigation />
    //     </PersistGate>
    //   </Provider>
    // </View>
    <View style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </View>
  );
};

export {App};
