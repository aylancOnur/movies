import * as constants from '../constants';

import * as movies from '../../api/movies';

export const requestAllMovies = page => async (dispatch, getState) => {
  dispatch({type: constants.SET_LOADING, key: 'loading', value: true});

  const {data, success} = await movies.getAllMovies(page);

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_ALL_MOVIES,
      payload: data,
    });
  } else {
  }

  setTimeout(() => {
    dispatch({type: constants.SET_LOADING, key: 'loading', value: false});
  }, 500);
};

export const requestMovietWithId = movieId => async (dispatch, getState) => {
  dispatch({
    type: constants.SET_DETAIL_LOADING,
    key: 'detailLoading',
    value: true,
  });

  const {data} = await movies.getMovieWithId(movieId);

  if (data.success) {
    dispatch({
      type: constants.REQUEST_GET_MOVIE_WITH_ID,
      payload: data,
    });
  } else {
    console.log('ERROR');
  }

  setTimeout(() => {
    dispatch({
      type: constants.SET_DETAIL_LOADING,
      key: 'detailLoading',
      value: false,
    });
  }, 1000);
};

export const requestCachedMovietWithId =
  movie => async (dispatch, getState) => {
    dispatch({
      type: constants.SET_DETAIL_LOADING,
      key: 'detailLoading',
      value: true,
    });

    dispatch({
      type: constants.REQUEST_GET_CACHE_MOVIE_WITH_ID,
      payload: movie,
    });

    setTimeout(() => {
      dispatch({
        type: constants.SET_DETAIL_LOADING,
        key: 'detailLoading',
        value: false,
      });
    }, 1000);
  };

export const clearmovieDetail = () => async (dispatch, getState) => {
  dispatch({
    type: constants.REQUEST_CLEAR_MOVIE_DETAIL,
  });
};

export const requestSearchMovies =
  (page, query, isPagination) => async (dispatch, getState) => {
    dispatch({
      type: constants.SET_SEARCH_LOADING,
      key: 'searchLoading',
      value: true,
    });

    const {data, success} = await movies.getSearchMovies(page, query);

    if (success) {
      dispatch({
        type: constants.REQUEST_GET_SEARCH_MOVIES,
        payload: {data, isPagination},
      });
    } else {
    }

    dispatch({
      type: constants.SET_SEARCH_LOADING,
      key: 'searchLoading',
      value: false,
    });
  };

export const clearSearchMovies = () => async (dispatch, getState) => {
  dispatch({
    type: constants.REQUEST_CLEAR_SEARCH_MOVIES,
  });
};

export const pullToRefresh = page => async (dispatch, getState) => {
  dispatch({type: constants.SET_LOADING, key: 'loading', value: true});

  dispatch({
    type: constants.PULL_TO_REFRESH,
  });

  const {data, success} = await movies.getAllMovies(page);

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_ALL_MOVIES,
      payload: data,
    });
  } else {
  }

  dispatch({type: constants.SET_LOADING, key: 'loading', value: false});
};
