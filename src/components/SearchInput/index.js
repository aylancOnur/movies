import React, {useRef} from 'react';
import {Text, View} from 'react-native';

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

  const inputRef = useRef();

  setTimeout(() => inputRef.current.focus(), 150);

  const EmptyComponent = ({title}) => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{title}</Text>
    </View>
  );

  return (
    <Autocomplete
      style={styles.autoComplate}
      data={searchMovies.movies.length > 0 ? searchMovies.movies : []}
      ListEmptyComponent={
        <EmptyComponent title="Nothing here, come back later.." />
      }
      placeholder={'Search a Movie'}
      autoFocus={true}
      inputContainerStyle={styles.inputContainer}
      listContainerStyle={styles.listContainer}
      ref={inputRef}
      onChangeText={text => {
        handleText(text);
      }}
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

        ListHeaderComponent: searchLoading ? <Loading /> : null,
        ListFooterComponent: searchLoading ? <Loading /> : null,
        ListEmptyComponent: (
          <EmptyComponent title="Nothing here, come back later.." />
        ),
        initialNumToRender: 20,
      }}
    />
  );
};

export {SearchInput};
