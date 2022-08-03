import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function MiddleSection() {
  return (
    <View style={styles.MiddleSection}>
      <Text style={styles.text}>
        You get 12 hours to connect with people in chatroom !
      </Text>
      <FontAwesome5 style={styles.font}  name={'search'} size={25} color="black"/>
      <Text style={styles.textbootom}>60 mins to share pics/videos </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    MiddleSection: {
    height: '20%',
    width:'100%',
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",  
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    alignContent: 'center',
    position: 'relative',
    textAlign: 'center',
    fontSize:18,
  },
  textbootom: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize:16,
    marginTop:10,
  },
  font:{
    position: 'absolute',
    right:20,
    paddingTop:50,
  }
});
