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
import Picture from '../components/Picture';


export default function User() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Picture/>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
