import {StyleSheet} from 'react-native';
import colors from '../../utils/color';
import {width, height} from '../../utils/ui/dimensions';

const setHeight = h => (height / 100) * h;
const setwidth = w => (width / 100) * w;

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

export default styles;
