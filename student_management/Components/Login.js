import React from 'react';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'users_db.db', createFromLocation :'~www/users_db.db'});

class LoginScreen extends React.Component {
 
  constructor(props) {
    super(props);
    this.state={
      open: true,
      login: false,
      u_id:'',
    }

    db.transaction(function(txn) {
      txn.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='users'", [], function(tx, res) {
          console.log('item:', res.rows.length);
          console.log('item:', JSON.stringify(res));
         
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS user', []);
            txn.executeSql('CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(40), user_pass VARCHAR(20))', [],
            function(error){
              console.log('error', error)
            }, function(){
              console.log('Table created')
            });
          }
        }
      );
    }, function(error) {
      console.log('Transaction ERROR: ' + error.message);
    }, function() {
      console.log('Populated database OK');
    });
  }
  
  loginHandler = () => {
    const that = this;
    const {email} = this.state;
    const {pass} = this.state;

    console.log('i am here', email, pass)


    let k=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(email){
      console.log('email', email)
      if(k.test(email)){
      console.log('email verify')
      if(pass){
      console.log('pass', pass)


        db.transaction( function(txn) {
          
          console.log('i am inside')
          txn.executeSql('SELECT * FROM users where user_email = ? and user_pass= ?', [email, pass], (tx, results) => {
              const len = results.rows.length;
              console.log('result',  results.rows.item(0));
              console.log('len',len);

              if (results.rows.length > 0) {
                console.log('this.state', results.rows.item(0).user_id);
                // console.log("props", that.props);

                that.props.navigation.navigate("TabIndex",{ u_id: results.rows.item(0).user_id});
                
                this.setState({
                  ...this.state,
                 u_id:results.rows.item(0).user_id,
                });
              } else{
                console.log('in else part')
                alert('No user found');
                this.setState({
                  u_email:'',
                  u_pass:'',
                });
              }
            }
          );
        }, function(error) {
          console.log('Transaction ERROR: ' + error.message);
        }, function() {
          console.log('Populated database OK');
        });

        } else{
          alert('Please fill your Credentials.')
        }
      } else{
        'Please type a valid email.'
      }
    } else{
      alert('Please fill your Credentials.')
    }
    
  }


    render() {
      
      // const open = (
      //       <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'tomato'}}>
      //           <Text style={{fontFamily:'Muli', fontWeight:'bold', fontSize: 30, color:'#ffffff'}}>Student Management</Text>
      //       </View>
      // )

      return (
        <View style={styles.container}>
            <View style={styles.textInputCointainer}>
                <TextInput keyboardType='email-address' style={styles.textInput} placeholder='Email' onChangeText={email => this.setState({ email })}/>
                <TextInput secureTextEntry={true} style={styles.textInput} placeholder='Password' onChangeText={pass => this.setState({ pass })}/>
            </View>
            <View style={styles.buttonContainer}> 
                <Button title='Login' color='tomato' width='80%' onPress={this.loginHandler.bind(this)} />  
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Sign-Up' color='tomato' width='80%' onPress={() => this.props.navigation.navigate('SignUp')} />  
            </View>
        </View>
      )
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