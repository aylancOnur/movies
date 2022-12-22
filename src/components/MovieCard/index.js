import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {noPoster} from '../../assets/images/index';

import styles from './styles';

const MovieCard = props => {
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
      <View style={styles.priceAndRating}>
        <Text style={styles.productName}>{props.movie.title}</Text>
        <View style={styles.price}>
          <Text>{props.movie.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(MovieCard);
