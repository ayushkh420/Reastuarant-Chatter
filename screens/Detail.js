import React from 'react';
import {StyleSheet, Text,Image, View,SafeAreaView} from 'react-native';

export default function Detail() {
  return (
    <SafeAreaView>
    <View style={styles.MiddleSection}>
      <Text style={styles.text}>
        Details page!!
      </Text>
      <Text style={styles.textbootom}>O hi is an Instant Social Network, it lets you free your personality in Cafes to connect with people around keeping your comfort zone intact. Just go to a café, take out your phone Tap on app, now keep your phone aside and enjoy your food.</Text>
      <Image
			style ={styles.img}
			source={{ uri : "https://www.ohiapp.com/wp-content/uploads/2022/07/20-1059x800.png"}}
		/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    MiddleSection: {
    height: '100%',
    width:'100%',
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'black',  
  },
  text: {
    color: 'white',
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
    paddingBottom:15 ,
    color: 'grey' 
  },
  img:{
    position: 'relative',
    width: "95%",
    height:"80%",
    resizeMode:'contain',

  }
});
