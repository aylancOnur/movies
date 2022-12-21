import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from './utils/ui/getStatusBarHeight';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight('skipAndroid'),
  },
});

export default styles;
