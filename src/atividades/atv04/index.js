import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Index from './src/atividades/atv04';

export default function App() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#B7F1C1',
    padding: 8,
  },
});