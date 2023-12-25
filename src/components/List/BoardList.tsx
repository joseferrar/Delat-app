import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import BoardCard from '../Card/BoardCard';

const BoardList = ({data, navigation}: any) => {
  return (
    <FlatList
      contentContainerStyle={styles.contentContainerStyle}
      numColumns={2}
      ListFooterComponentStyle={styles.ListFooterComponentStyle}
      data={data}
      ListFooterComponent={() => <View style={styles.ListFooterComponent} />}
      // ListEmptyComponent={<NotFound/>}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => (
        <BoardCard title={item.title} description={item.desc} />
      )}
    />
  );
};

export default BoardList;

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginLeft: 8,
    marginRight: 8,
  },
  ListFooterComponentStyle: {
    marginBottom: 12,
  },
  ListFooterComponent: {
    marginBottom: 30,
  },
});
