import {StyleSheet} from 'react-native';
import colors from '../../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 120,
    width: 80,
    borderRadius: 10,
  },
  originalName: {
    width: 80,
    color: colors.BLACK,
    fontSize: 12,
  },
  characterName: {
    width: 80,
    color: colors.LIGHT_GRAY,
    fontSize: 12,
  },
});

export default styles;
