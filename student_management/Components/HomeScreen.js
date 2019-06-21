import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

import AllStudents from './Components/AllStudents';
import Active from './Components/Actives';
import Inactive from './Components/Inactives';
import Deleted from './Components/Deleted';

// import AddTabNavigator from './Components/AddIcon';

const HomeScreen = createMaterialTopTabNavigator(
  {
    All: AllStudents,
    Actives: Active,
    Inactives: Inactive,
    Deleted: Deleted,
},
{
  tabBarOptions: {
      indicatorStyle:{
        backgroundColor:'black',
        borderBottomWidth:3,
        borderRightWidth:3,
        borderLeftWidth:3
      },
      activeTintColor: 'black',
      inactiveTintColor: 'white',
      style:{
        backgroundColor: 'tomato',
        borderBottomWidth:3,
        borderColor:'white'
      },
  },
}
);

  export default HomeScreen;