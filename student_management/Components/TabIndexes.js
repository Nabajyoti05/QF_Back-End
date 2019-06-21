import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';


const TabNavigator = createBottomTabNavigator(
    {
    Home: HomeScreen,
    Profile:{
      screen: ProfileScreen,
      // navigationOptions: ({ navigation }) => ({
      //     title: 'User Profile',
      //   }),
  },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-home`;          
        }
       
        else if (routeName === 'Profile') {
        iconName = `md-person`;
        }
        return <Icons style={{padding:20}} name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
        showIcon:true,
        activeTintColor: 'black',
        inactiveTintColor: 'white',
        style:{
          backgroundColor:'tomato'
        }
    },
  }
  );
  
export default createAppContainer(TabNavigator);