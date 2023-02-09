import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { getCountries } from './utils';

export const App = () => {
  const countries = getCountries('uk');
  return (
    <SafeAreaView>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.code}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
  },
  listItemText: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
});
