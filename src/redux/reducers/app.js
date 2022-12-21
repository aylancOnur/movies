import * as constants from '../constants';

const initialState = {
  loading: false,

  searchLoading: true,

  movies: [],

  cacheMovies: [],

  searchMovies: {
    movies: [],
    total_pages: null,
  },

  movie: {},
};

export const app = (state = initialState, {type, payload, key, value}) => {
  switch (type) {
    case constants.SET_LOADING: {
      return {...state, [key]: value};
    }

    case constants.SET_SEARCH_LOADING: {
      return {...state, [key]: value};
    }

    case constants.REQUEST_GET_ALL_MOVIES: {
      return {
        ...state,
        movies: [...state.movies, ...payload.results],
      };
    }

    case constants.REQUEST_GET_MOVIE_WITH_ID: {
      return {
        ...state,
        movie: payload,
        cacheMovies: [...state.cacheMovies, payload],
      };
    }

    case constants.REQUEST_GET_SEARCH_MOVIES: {
      if (payload.isPagination) {
        return {
          ...state,
          searchMovies: {
            movies: [...state.searchMovies.movies, ...payload.data.results],
            total_pages: payload.data.total_pages,
          },
        };
      } else {
        return {
          ...state,
          searchMovies: {
            movies: payload.data.results,
            total_pages: payload.data.total_pages,
          },
        };
      }
    }

    case constants.REQUEST_CLEAR_SEARCH_MOVIES: {
      return {
        ...state,
        searchMovies: {movies: []},
      };
    }

    case constants.PULL_TO_REFRESH: {
      return {
        ...state,
        movies: [],
      };
    }

    default:
      return state;
  }
};
