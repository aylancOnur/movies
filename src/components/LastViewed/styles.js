import {StyleSheet} from 'react-native';
import colors from '../../utils/color';
import {W} from '../../utils/ui/dimensions';

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginHorizontal: W(1),
    backgroundColor: colors.EXTRA_LIGHT_GRAY,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headerTitle: {
    fontSize: 18,
  },
});

export default styles;
