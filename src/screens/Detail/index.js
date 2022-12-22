import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {CastCard, ItemSeparator, Loading} from '../../components';

import colors from '../../utils/color';
import {height} from '../../utils/ui/dimensions';

import {noCover} from '../../assets/images';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';

import {
  requestMovietWithId,
  clearmovieDetail,
  requestCachedMovietWithId,
} from '../../redux/actions';

import styles from './styles';

const mapStateToProps = state => {
  return {app: state.appReducer};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const setHeight = h => (height / 100) * h;

const Detail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const {movieId} = props.route.params;

  const [isCastSelected, setIsCastSelected] = useState(true);

  const handlePress = () => {
    props.navigation.goBack();
    dispatch(clearmovieDetail());
  };

  useEffect(() => {
    const cacheMovie = app.cacheMovies?.find(item => item.id === movieId);

    if (!cacheMovie) {
      dispatch(requestMovietWithId(movieId));
    } else {
      dispatch(requestCachedMovietWithId(cacheMovie));
    }
  }, [app.cacheMovies, dispatch, movieId]);

  return app.detailLoading ? (
    <Loading />
  ) : (
    <ScrollView>
      <View style={styles.moviePosterImageContainer}>
        <Image
          style={styles.moviePosterImage}
          resizeMode="cover"
          source={
            app.movie.backdrop_path
              ? {
                  uri: `https://image.tmdb.org/t/p/original/${app.movie.backdrop_path}`,
                }
              : noCover
          }
        />
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={35}
            color={colors.WHITE}
          />
        </TouchableOpacity>
      </View>
      <ItemSeparator height={setHeight(37)} />
      <View style={styles.movieTitleContainer}>
        <Text style={styles.movieTitle}>
          {app.movie && app.movie.original_title}
        </Text>
      </View>
      <Text style={styles.genreText}>
        {app.movie && app.movie.genres?.map(genre => genre?.name)?.join(', ')}
      </Text>
      <Text style={styles.genreText}>
        {app.movie && app.movie.original_language?.english_name}
      </Text>
      <View style={styles.overViewContainer}>
        <Text style={styles.overViewTitle}>Overview</Text>
        <Text style={styles.overViewText}>
          {app.movie && app.movie.overview}
        </Text>
      </View>
      <View>
        <Text style={styles.castTitle}>Cast</Text>
        <View style={styles.castSubMenuContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsCastSelected(true)}>
            <Text
              style={{
                ...styles.castSubMenuText,
                color: isCastSelected ? colors.BLACK : colors.LIGHT_GRAY,
              }}>
              Cast
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsCastSelected(false)}>
            <Text
              style={{
                ...styles.castSubMenuText,
                color: isCastSelected ? colors.LIGHT_GRAY : colors.BLACK,
              }}>
              Crew
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{marginVertical: 5}}
          data={
            isCastSelected && app.movie
              ? app.movie.data?.cast
              : app.movie.data?.crew
          }
          keyExtractor={item => item?.credit_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({item}) => (
            <CastCard
              originalName={item?.name}
              characterName={isCastSelected ? item?.character : item?.job}
              image={
                item?.profile_path
                  ? `https://image.tmdb.org/t/p/original/${item?.profile_path}`
                  : null
              }
            />
          )}
        />
      </View>
    </ScrollView>
  );
});

export {Detail};
