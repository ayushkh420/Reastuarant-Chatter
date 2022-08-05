import React from 'react';
import {StyleSheet, Text,Image, View,SafeAreaView} from 'react-native';

export default function Detail() {
  return (
    <SafeAreaView>
    <View style={styles.MiddleSection}>
      <Text style={styles.text}>
        Details page!!
      </Text>
      {/* <Text style={styles.textbootom}>Let's get connected</Text> */}
      {/* <Image
			style ={styles.img}
			source={{ uri : "https://img.freepik.com/premium-vector/people-cozy-cafe-coffee-shop-interior-customers-waitress-vector-illustration_169479-422.jpg?w=1060"}}
		/> */}
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
    height:"80%"
  }
});
