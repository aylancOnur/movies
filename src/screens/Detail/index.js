import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {CastCard, ItemSeparator, Loading} from '../../components';

import colors from '../../utils/color';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';

import {
  requestMovietWithId,
  clearmovieDetail,
  requestCachedMovietWithId,
} from '../../redux/actions';

import images from '../../assets/images';

const {height, width} = Dimensions.get('screen');
const setHeight = h => (height / 100) * h;
const setwidth = w => (width / 100) * w;

const mapStateToProps = state => {
  return {app: state.appReducer};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Detail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;
  const {movieId} = props.route.params;

  const [isCached, setIsCached] = useState(false);

  const [isCastSelected, setIsCastSelected] = useState(true);
  // const [cachedMovie, setCachedMovie] = useState({});

  // setCachedMovie(cacheMovie);

  // console.log('MOVIE =>', app.movie.title);
  // console.log('CACHED MOVIE =>', cachedMovie);
  // console.log('MOVIE ID =>', movieId);

  // console.log('DETAIL LOADING =>', app.detailLoading);

  const handlePress = () => {
    props.navigation.goBack();
    dispatch(clearmovieDetail());
  };

  useEffect(() => {
    const cacheMovie = app.cacheMovies?.find(item => item.id === movieId);

    // console.log('CACHED MOVIE =>', cacheMovie?.title);
    if (!cacheMovie) {
      dispatch(requestMovietWithId(movieId));
    } else {
      dispatch(requestCachedMovietWithId(cacheMovie));
    }
  }, [app.cacheMovies, dispatch, movieId]);

  // console.log('MOVIE DETAIL', app.movie);
  return app.detailLoading ? (
    <Loading />
  ) : (
    <ScrollView>
      {/* <StatusBar style="light" /> */}
      <View style={styles.moviePosterImageContainer}>
        <Image
          style={styles.moviePosterImage}
          resizeMode="cover"
          source={{
            uri: `https://image.tmdb.org/t/p/original/${
              app.movie && app.movie.backdrop_path
            }`,
          }}
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
              image={item?.profile_path}
            />
          )}
        />
      </View>
    </ScrollView>
  );
});

export {Detail};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BASIC_BACKROUND,
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setwidth(145),
    alignItems: 'center',
    position: 'absolute',
    left: setwidth((100 - 145) / 2),
    top: 0,
    elevation: 8,
  },
  moviePosterImage: {
    resizeMode: 'contain',
    width: setwidth(145),
    height: setHeight(35),
  },
  LinearGradient: {
    width: setwidth(100),
    height: setHeight(6),
    position: 'absolute',
    top: 0,
    elevation: 9,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 50,
    elevation: 20,
  },
  headerText: {
    color: colors.WHITE,
    // fontFamily: fonts.BOLD,
  },
  playButton: {
    position: 'absolute',
    top: 110,
    left: setwidth(50) - 70 / 2,
    elevation: 10,
  },
  movieTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  movieTitle: {
    color: colors.BLACK,
    // fontFamily: fonts.EXTRA_BOLD,
    fontSize: 18,
    width: setwidth(60),
  },
  ratingText: {
    marginLeft: 5,
    color: colors.BLACK,
    // fontFamily: fonts.EXTRA_BOLD,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 550,
    paddingStart: 540,
  },
  fav: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreText: {
    color: colors.LIGHT_GRAY,
    paddingHorizontal: 20,
    paddingTop: 5,
    // fontFamily: fonts.BOLD,
    fontSize: 13,
  },
  genreText2: {
    color: colors.DEFAULT_BLACK,
    //paddingHorizontal:20,
    paddingBottom: 7,
    paddingTop: 5,
    // fontFamily: fonts.BOLD,
    fontSize: 16,
    paddingVertical: 5,
  },
  overViewContainer: {
    backgroundColor: colors.EXTRA_LIGHT_GRAY,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  overViewTitle: {
    color: colors.BLACK,
    // fontFamily: fonts.BOLD,
    fontSize: 18,
  },
  overViewText: {
    color: colors.LIGHT_GRAY,
    paddingVertical: 5,
    // fontFamily: fonts.BOLD,
    fontSize: 13,
    textAlign: 'justify',
  },
  castTitle: {
    marginLeft: 20,
    color: colors.BLACK,
    // fontFamily: fonts.BOLD,
    fontSize: 18,
  },
  castSubMenuContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    marginVertical: 5,
  },
  castSubMenuText: {
    marginRight: 10,
    color: colors.BLACK,
    // fontFamily: fonts.BOLD,
    fontSize: 13,
  },
  extraListTitle: {
    marginLeft: 20,
    color: colors.BLACK,
    // fontFamily: fonts.BOLD,
    fontSize: 18,
    marginVertical: 8,
  },
});
