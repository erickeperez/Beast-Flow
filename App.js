import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Colors from './constants/colors'


export default function App() {

  return (
    <View style={styles.screen}>
      <Header 
      title="Beast Flow"
      style={styles.header}
       />
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  header: {
    color: Colors.primary
  }
});
