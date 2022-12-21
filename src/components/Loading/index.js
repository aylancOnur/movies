import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Lottie from 'lottie-react-native';

import styles from './styles';

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" />
      {/* <Lottie
        style={{height: 50, width: 200}}
        source={require('../../assets/loading.json')}
        autoPlay
        loop
      /> */}
    </View>
  );
};

export {Loading};
