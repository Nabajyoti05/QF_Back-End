import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator,createAppContainer } from 'react-navigation';
import Icons from 'react-native-vector-icons/Ionicons';


class AddStudent extends React.Component{
    render(){
      return (
        <View style={{flexDirection:'column-reverse', justifyContent:'flex-start'}}>
            <Icons name="md-add-circle-outline" style={{position:'absolute'}} />
        </View>      
      );
    }
  }

export default AddStudent;

// const AddTabNavigator = createBottomTabNavigator(
//     {
//     Add: AddStudent,
//     // Profile: ProfileScreen,
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Home') {
//           iconName = `md-home`;          
//         }
       
//         else if (routeName === 'Profile') {
//         iconName = `md-person`;
//         }
//         return <Icons style={{padding:20}} name={iconName} size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//         showIcon:true,
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'grey',
//         style:{
//           backgroundColor:'#ffffff'
//         }
//     },
//   }
//   );

//   export default createAppContainer(AddTabNavigator);
  