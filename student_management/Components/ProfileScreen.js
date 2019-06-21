import React from 'react';
import { Text, View, Image, TouchableOpacity,Button } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';

class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor:'#f7f7f7' }}>
          <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: 'tomato', width: '100%', height:62}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Image source={require('./assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              </TouchableOpacity>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:26}}>User Profile</Text>
          </View>


          <View style={{width:'100%', padding:20}}>

            <View style={{ borderBottomColor: 'tomato', borderBottomWidth: 1, width:'100%', alignSelf:'flex-start'}}>
              <Text>Personal Details</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{width:'30%'}}>Name:</Text>
                <TextInput value='Nabajyoti Borah'  style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1,}}/>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('TabIndex')} >
                        <Icons name="md-create" size={20}  />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{width:'30%'}}>Email:</Text>
                <TextInput value='naba@dilytics.com' style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1}} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('TabIndex')} >
                        <Icons name="md-create" size={20} />
                </TouchableOpacity>
            </View>

            <View style={{marginTop:10, padding:10}}>
                <Button title='Save' color='tomato' />              
            </View>

          </View>

          <View style={{width:'100%', padding:20}}>

            <View style={{ borderBottomColor: 'tomato', borderBottomWidth: 1, width:'100%', alignSelf:'flex-start'}}>
              <Text>Change Password</Text>
            </View>


            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{width:'30%'}}>Old Password:</Text>
                <TextInput style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1,}}/>
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{width:'30%'}}>New Password:</Text>
                <TextInput style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1,}}/>
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{width:'30%'}}>Confirm Password:</Text>
                <TextInput style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1,}}/>
            </View>

            <View style={{marginTop:10, padding:10}}>
                <Button title='Change Password' color='tomato' />              
            </View>

          </View>

        </View>
      );
    }
  }

  export default ProfileScreen;