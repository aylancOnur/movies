import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import colors from '../../utils/color';
// import fonts from '../constants/fonts';
import images from '../../assets/images';

import {getPoster} from '../../services/MovieService';

const CastCard = ({originalName, image, characterName}) => {
  return (
    <View style={styles.container}>
      <Image
        source={image ? {uri: getPoster(image)} : images.NO_IMAGE}
        resizeMode={image ? 'cover' : 'contain'}
        style={styles.image}
      />
      <Text style={styles.originalName} numberOfLines={2}>
        {originalName}
      </Text>
      <Text style={styles.characterName} numberOfLines={2}>
        {characterName}
      </Text>
    </View>
  );
};

export {CastCard};

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
    // fontFamily: fonts.BOLD,
    fontSize: 12,
  },
  characterName: {
    width: 80,
    color: colors.LIGHT_GRAY,
    // fontFamily: fonts.BOLD,
    fontSize: 12,
  },
});
