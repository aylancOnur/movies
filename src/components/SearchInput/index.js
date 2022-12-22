import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {SearchItem} from '../index';

import {Loading} from '../index';

import Autocomplete from 'react-native-autocomplete-input';

import styles from './styles';

const SearchInput = props => {
  const {
    navigation,
    searchMovies,
    handlePagination,
    searchLoading,
    handleText,
    setQuery,
    close,
  } = props;

  const EmptyComponent = ({title}) => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Nothing here...</Text>
    </View>
  );

  const Footer = () => {
    return (
      <View style={styles.headerStyle}>
        <Loading />
      </View>
    );
  };

  return (
    <Autocomplete
      style={styles.autoComplate}
      data={searchMovies.movies.length > 0 ? searchMovies.movies : []}
      ListEmptyComponent={<EmptyComponent />}
      placeholder={'Search a Movie'}
      autoFocus={true}
      inputContainerStyle={styles.inputContainer}
      listContainerStyle={styles.listContainer}
      renderTextInput={() => (
        <TextInput autoFocus={true} onChangeText={handleText} />
      )}
      flatListProps={{
        onEndReached: handlePagination,
        keyExtractor: (_, idx) => idx,
        scrollEnabled: searchLoading ? false : true,
        renderItem: ({item}) => (
          <SearchItem
            item={item}
            navigation={navigation}
            setQuery={setQuery}
            close={close}
          />
        ),
        ListHeaderComponent: searchLoading ? Loading : null,
        ListFooterComponent: searchLoading ? Footer : null,
        ListEmptyComponent: EmptyComponent,
        initialNumToRender: 20,
      }}
    />
  );
};

export {SearchInput};
