import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AddScreen from './Components/AddScreen';
import TabIndexes from './Components/TabIndexes';
import View from './Components/Components/ViewDetails';
import Edit from './Components/editDetail';

const AppContainer = createStackNavigator(
    {
        Login: Login,
        SignUp:SignUp,
        AddScreen:AddScreen,
        View: View,
        Edit: Edit,
        TabIndex: TabIndexes
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
    },
);

const App = createAppContainer(AppContainer);

export default App;