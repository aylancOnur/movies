import {Dimensions} from 'react-native';
import {getStatusBarHeight} from './getStatusBarHeight';

export const window = Dimensions.get('window');
export const screen = Dimensions.get('screen');

export const width = window.width;
export const height = window.height;

export const W = d => (width * d) / 100;
export const H = d => (height * d) / 100;

export const sbh = getStatusBarHeight();
export const sbhi = getStatusBarHeight(true);
