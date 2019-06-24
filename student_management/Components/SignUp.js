import React,{Component} from 'react';
import { Text, View, TextInput, StyleSheet, Image, Button, TouchableOpacity, Alert } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'users_db.db', createFromLocation :'~www/users_db.db'});


class SignUp extends Component {

  state={
    name:'',
    email:'',
    pass:'',
    conPass:''
  }

  register_user = () => {
    const that = this;
    const {name} = this.state;
    const {email} = this.state;
    const {pass} = this.state;
    const {conPass} = this.state;

    if(name){
      let k=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(k.test(email)){
        if(pass){
          if(conPass){
            if(conPass !== pass){
              alert('Password does not match !')
            } else {
              db.transaction( function(tx){                
                tx.executeSql('INSERT INTO users(user_name, user_email, user_pass) VALUES (?,?,?)', [name, email, pass], (tx, results) => {
                  console.log('rows', results)
                  if(results.rowsAffected){
                      Alert.alert('Success', 'You are Registered Successfully',
                      [
                        {
                          text: 'Ok',
                          onPress: () =>
                            that.props.navigation.navigate('Login'),
                        },
                      ],
                      { cancelable: false })
                    } else {
                      alert('Registration Failed');
                    }
                  
                })
              })
            }
          } else {
            alert('Please confirm the password !')
          }
        } else {
          alert('Please fill the password !')
        }
      } else {
        alert('Please fill a valid email-id !')
      }
    } else {
      alert('Please fill the name !')
    }
  }

  render() {
    return (
      <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: 'tomato', width: '100%', height:62}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Image source={require('./assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              </TouchableOpacity>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:26}}>User Registration</Text>
            </View>
          <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
                <Text style={styles.text}>Name</Text>
                <TextInput style={styles.textInput} placeholder='Name' onChangeText={name => this.setState({ name })}/>   
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput keyboardType='email-address' style={styles.textInput} placeholder='Email' onChangeText={email => this.setState({ email })} />   
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} placeholder='*************' onChangeText={pass => this.setState({ pass })}/>   
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput secureTextEntry={true} style={styles.textInput} placeholder='*************' onChangeText={conPass => this.setState({ conPass })}/>   
              </View>

              <View style={styles.innerContainer}>
                    <View style={{margin:5}}>
                      <Button title="Submit" color='tomato' onPress={this.register_user.bind(this)}/>
                    </View>
              </View>

          </View>  
          {/* <Text>{this.state.name}</Text>       */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent :'flex-start',
    alignItems:'center',
    backgroundColor:'#f7f7f7'
  },
  outerContainer:{
    width:'95%',
    flexDirection:'column',
    justifyContent:'center',
    borderRadius: 4,
    backgroundColor: "#ffffff"
  },
  innerContainer:{
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#f7f7f7',
    margin:2
  },
  text:{
    fontFamily:'Muli',
    fontSize:12,
  },
  textInput:{
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
})


export default SignUp;