import React from 'react';
import {View, Text, Image} from 'react-native';

import {noImage} from '../../assets/images';

import styles from './styles';

const CastCard = ({originalName, image, characterName}) => {
  return (
    <View style={styles.container}>
      <Image
        source={image ? {uri: image} : noImage}
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
