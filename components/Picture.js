import React from 'react';
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Linking
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const image = {
  uri: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
};


export default function Boxes() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View>
            <ImageBackground
              borderRadius={5}
              source={image}
              blurRadius={2.0}
              resizeMode="cover"
              style={styles.square}>
              <View style={styles.inner}></View>
            </ImageBackground>
          </View>
        </View>
        <Text style={styles.text}>
          Liked by<Text style={styles.text2}> 2 people ❤</Text>
        </Text>
        <View style={styles.inline}>
          <Text style={styles.text3}>Foodie{'\n'}<Text style={styles.text4}>Male</Text></Text>
          <Text style={styles.text5}> 4{'\n'} Friends</Text>
        </View>
        <Text style={styles.text4}>  O hi user since: Feb 05,2022</Text>
        <Text style={styles.text}>
          <FontAwesome5
            style={styles.font}
            name={'city'}
            size={15}
            color="black"
          />{' '}
          Jaipur                {' '}
          <Text style={styles.text}>
            {' '}
            <FontAwesome5
              style={styles.font}
              name={'child'}
              size={15}
              color="black"
            />{' '}
            Dec 10
          </Text>
        </Text>
        <Text style={styles.text}>
          <FontAwesome5
            style={styles.font}
            name={'school'}
            size={15}
            color="black"
          />{' '}
          B.Tech Manipal University Jaipur
        </Text>
        <Text  style={{fontSize:18,marginTop:20,paddingLeft:10,color: '#4d88ff'}} onPress={() => {
              Linking.openURL('https://www.instagram.com/ayush_222/');
            }}>
          <FontAwesome5
            style={styles.font}
            name={'instagram'}
            size={20}
            color="black"
          />{' '}
          ayush_222...
        </Text>
        <Text  style={{fontSize:18,marginTop:20,paddingLeft:10,color: '#4d88ff'}} onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/ayush-khandelwal-621920108/');
            }}>
          <FontAwesome5
            style={styles.font}
            name={'linkedin'}
            size={20}
            color="black"
            
          />{' '}
          ayushkhandelwal
        </Text>
        
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  square: {
    width: 400,
    height: 300,
  },
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    fontSize: 15,
    marginTop: 20,
    paddingLeft: 10,
  },
  text3: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    fontSize: 20,
    paddingLeft: 10,
  },
  text4: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 14,
  },
  text2: {
    color: 'red',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text5: {
    color: 'red',
    position: 'relative',
    // right:30,
    fontWeight: 'bold',
    textAlign: 'center',
    left:200,
  },
  font: {
    position: 'relative',
  },
  inline: {
    flexDirection: 'row',
    paddingBottom: 20,
    paddingTop: 20,
  },
});
