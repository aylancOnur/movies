import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {connect} from 'react-redux';

import {cacheMovie} from '../../redux/actions';

import styles from './styles';

const mapStateToProps = state => {
  return {app: state.appReducer};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const MovieCard = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  const handlePress = () => {
    props.navigation.navigate('MovieDetail', {
      movieId: props.movie.id,
    });
    // dispatch(cacheMovie(props.movie));
  };
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${props.movie.backdrop_path}`,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.priceAndRating}>
        <Text style={styles.productName}>{props.movie.title}</Text>
        <View style={styles.price}>
          <Text>{props.movie.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default memo(MovieCard);
