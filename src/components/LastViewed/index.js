import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {ItemSeparator} from '../../components';
import LastViewedCard from './MovieCard';

import {connect} from 'react-redux';

import styles from './styles';

const mapStateToProps = state => {
  return {app: state.appReducer};
};

const LastViewed = connect(mapStateToProps)(props => {
  const {app} = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Last Viewed</Text>
      </View>
      <FlatList
        data={app.cacheMovies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={20} />}
        renderItem={({item}) => {
          return <LastViewedCard movie={item} navigation={props.navigation} />;
        }}
      />
    </View>
  );
});

export {LastViewed};
