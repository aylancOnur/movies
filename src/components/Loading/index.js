import React from 'react';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';

import styles from './styles';

const Loading = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Lottie
        source={require('../../assets/movieLoading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export {Loading};
