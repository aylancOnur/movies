import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  View,
  RefreshControl,
  Platform,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';

import {requestAllMovies, pullToRefresh} from '../../redux/actions';

import {Loading, MovieCard, SearchBar, LastViewed} from '../../components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const mapStateToProps = state => {
  return {app: state.appReducer};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {app, dispatch} = props;

  console.log('APP =>', app.cacheMovies.length);

  const [firstLoading, setFirstLoading] = useState(true);

  const [page, setPage] = useState(1);

  const flatListRef = useRef();

  const handlePagination = () => {
    setPage(page + 1);
  };

  const onRefresh = () => {
    dispatch(pullToRefresh(1));
  };

  useEffect(() => {
    dispatch(requestAllMovies(page));
  }, [dispatch, page]);

  setTimeout(() => {
    setFirstLoading(false);
  }, 1000);

  const backToTop = () => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  return firstLoading ? (
    <Loading />
  ) : (
    <>
      <View style={Platform.OS === 'ios' ? styles.searchContainer : null}>
        <SearchBar navigation={props.navigation} />
      </View>

      <View style={styles.container}>
        {app.cacheMovies.length > 0 ? (
          <LastViewed navigation={props.navigation} />
        ) : null}

        <FlatList
          data={app.movies}
          ref={flatListRef}
          renderItem={({item}) => {
            return <MovieCard movie={item} navigation={props.navigation} />;
          }}
          keyExtractor={item => item.id}
          onEndReached={handlePagination}
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={app.loading} onRefresh={onRefresh} />
          }
          scrollEnabled={app.loading ? false : true}
          ListFooterComponent={() => (
            <View style={styles.loadingContainer}>
              <Loading />
            </View>
          )}
          initialNumToRender={20}
        />
      </View>
      <TouchableOpacity onPress={backToTop} style={styles.scrollToTop}>
        <MaterialCommunityIcons name="chevron-up" color="white" size={40} />
      </TouchableOpacity>
    </>
  );
});

export {Home};
