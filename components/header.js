import React  from "react";
import { View,Text,StyleSheet,Image} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Header(){
    return(
        <View style={styles.main}>
        <View style={styles.header}>
            <Image
        style={styles.tinyimg}
        source={{
          uri: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        }}
      />
            <FontAwesome5 style={styles.font}  name={'bell'} size={30} color="black"/>
            <Text style={styles.title}>Hello,</Text>
            <Text style={styles.name}>Product Designer</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
      paddingTop:10
    },
header:{
height :60,
paddingTop:10,


},
title:{
    textAlign:'left',
    paddingLeft:70,
    color:'black',
    fontSize:20,
    fontWeight:'bold'

},
name:{
    textAlign:'left',
    paddingLeft:70,
},
tinyimg: {
    width: 50,
    height: 50,
    borderRadius:40,
    marginTop:10,
    position: 'absolute',
  },
  font:{
    position: 'absolute',
    right:30,
    marginTop:20,
  }
})