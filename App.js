import 'react-native-gesture-handler'
import React from 'react';
import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import About from './pages/About';
import InGame from './pages/InGame';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import InGameMulti from './pages/InGameMulti';
import Home from './pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

global.user = false;

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            color = focused ? 'red' : 'gray'
            return <AntDesign name={"home"} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            color = focused ? 'blue' : 'gray'
            return <AntDesign name={"profile"} size={size} color={color} />;
          } else if (route.name === 'Leaderboard') {
            color = focused ? 'yellow' : 'gray'
            return <MaterialIcons name={"leaderboard"} size={size} color={color} />;
          } else if (route.name === 'About') {
            color = focused ? 'orange' : 'gray'
            return <FontAwesome name={"hand-stop-o"} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'gray',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='RockPaperScissors' component={HomeScreen}/>
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='InGame' component={InGame}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Leaderboard' component={Leaderboard}/>
        <Stack.Screen name='InGameMulti' component={InGameMulti}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
