import React, {memo} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {noPoster} from '../../../assets/images/index';

import styles from './styles';

const LastViewedCard = props => {
  const handlePress = () => {
    props.navigation.navigate('MovieDetail', {
      movieId: props.movie.id,
    });
  };
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image
          source={
            props.movie.backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`,
                }
              : noPoster
          }
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(LastViewedCard);
