import React from 'react';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';

// import TabIndexes from './TabIndexes';

class LoginScreen extends React.Component {
  
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.textInputCointainer}>
                <TextInput style={styles.textInput} placeholder='Email' />
                <TextInput style={styles.textInput} placeholder='Password' />
            </View>
            <View style={styles.buttonContainer}> 
                <Button title='Login' color='tomato' width='80%' onPress={() => this.props.navigation.navigate('TabIndex')} />  
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Sign-Up' color='tomato' width='80%' onPress={() => this.props.navigation.navigate('SignUp')} />  
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
      container : {
        flex: 1,
        width:'100%',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'#f7f7f7'
      },
      textInputCointainer:{
        width:'80%',
      },
      buttonContainer:{
        width:'60%',
        marginTop: 20
      },
      textInput:{
        // backgroundColor:'white',
        width:'100%',
        margin:10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      }
  })

  export default LoginScreen;