import {StyleSheet} from 'react-native';
import {W} from '../../utils/ui/dimensions';
import colors from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: W(2),
  },
  searchContainer: {
    zIndex: 9,
  },
  loadingContainer: {
    height: 50,
  },
  scrollToTop: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    backgroundColor: colors.ACTIVE,
    borderRadius: 100,
  },
});

export default styles;
