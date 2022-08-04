import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  Button,
  ImageBackground,
  ScrollView,
} from 'react-native';
import MiddleSection from '../components/middleSection';
import Boxes from '../components/boxes';
import Header from '../components/header';


export default function Chatroom() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header/>
      <MiddleSection/>
      <Boxes/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
