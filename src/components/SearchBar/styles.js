import {StyleSheet} from 'react-native';
import colors from '../../utils/color';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 3,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.LIGHT_GRAY,
  },
  searchContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  movieIcon: {
    marginRight: 5,
  },
  title: {
    fontSize: 22,
  },
  rectangleContainer: {
    flexWrap: 'wrap',
  },
  rectangle: {
    height: 40,
  },
  searchIcon: {
    width: 24,
    height: 40,
    justifyContent: 'center',
  },
  autocompleteContainer: {
    // top: getStatusBarHeight(),
    paddingHorizontal: 20,
    position: 'absolute',
    paddingLeft: 60,
    height: 40,
    width: '100%',
  },
});

export default styles;
