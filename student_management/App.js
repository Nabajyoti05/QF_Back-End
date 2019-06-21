import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddScreen from './Components/AddScreen';
import TabIndexes from './Components/TabIndexes';

const AppContainer = createStackNavigator(
    {
        Login: {
            screen: Login,
            // navigationOptions: ({ navigation }) => ({
            //     title: 'Login',
            //   }),
        },
        SignUp:{
            screen: SignUp,
            // navigationOptions: ({ navigation }) => ({
            //     title: 'Sign-Up',
            //   }),
        },
        AddScreen:{
            screen: AddScreen,
            // navigationOptions: ({ navigation }) => ({
            //     title: 'Add Students',
            //   }),
        },
        TabIndex:{
            screen: TabIndexes,
            // navigationOptions: ({ navigation }) => ({
            //     title: 'Home',
            //   }),
        },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    },
);

const App = createAppContainer(AppContainer);

export default App;