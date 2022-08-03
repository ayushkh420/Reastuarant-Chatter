import React from 'react';
import {Button, StyleSheet, Text, View, ImageBackground} from 'react-native';


const image = { uri: "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" };


export default function Boxes() {
  return (
    <View style={styles.container}>
        <View>
      <ImageBackground borderRadius={20} source={image} blurRadius={1.5}resizeMode="cover"style={styles.square}>
        <View style={styles.inner}>
          <Text style={styles.text}>TOWN COFFEE-C SCHEME</Text>
        </View>
      </ImageBackground>
        <Button title='+ Invite Friend' color="#000000"/>
      </View>

      <View>
      <ImageBackground source={image} borderRadius={20} blurRadius={1.5}resizeMode="cover"style={styles.square}>
        <View style={styles.inner}>
          <Text style={styles.text}>CAFE-LAZY MOJO</Text>
        </View>
      </ImageBackground>
        <Button title='+ Invite Friend' color="#000000"/>
      </View>
      
      <View>
      <ImageBackground source={image} borderRadius={20}  blurRadius={1.5} resizeMode="cover"style={styles.square}>
        <View style={styles.inner}>
          <Text style={styles.text}>H.O.P  HOUSE OF PEOPLE</Text>
        </View>
      </ImageBackground>
        <Button title='+ Invite Friend' color="#000000"/>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  square: {
    backgroundColor: '#7cb48f',
    width: 150  ,
    marginTop: 30,
    height: 150,
    marginBottom: 10,
    alignContent:"center",
    borderRadius: 50,
   
    
    
  },
  container: {
    backgroundColor: '#ffff',
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },
  text:{
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize:20,
    fontFamily: 'Open Sans',
  },
});
