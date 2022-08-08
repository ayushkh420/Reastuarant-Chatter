import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './screens/Home'
import Chatroom from './screens/Chatroom'
import Detail from './screens/Detail'
import User from './screens/User'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"home"} color={color} size={size} />)}}/> 
        <Tab.Screen name="Detail" component={Detail} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"info"} color={color} size={size} />)}}/>
        <Tab.Screen name="Chatroom" component={Chatroom} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"comment"} color={color} size={size} />)}}/>
        <Tab.Screen name="My profile" component={User} options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"user"} color={color} size={size} />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
