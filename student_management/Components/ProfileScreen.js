import React from 'react';
import { Text, View, Image, TouchableOpacity,Button, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';

import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'users_db.db', createFromLocation :'~www/users_db.db'});

class ProfileScreen extends React.Component {
  state={
    profile:[],
    edit:[{name: false}, {email: false}],
    pass: false
  }

  componentDidMount(){

    console.log("props", this.props.navigation.state.params.u_id)

    let u_id = this.props.navigation.state.params.u_id;

    let resultArray=[];
    let result;
    let that = this;
    db.transaction(function(txn) {

      txn.executeSql('SELECT * FROM users where user_id='+ u_id +'', [], (tx, results) => {

        console.log('results',results)

        if (results.rows.length !== 0) {
          
            result = results.rows.item(0);
            resultArray.push(result);
            // console.log("single", resultArray)
            that.setState({profile: resultArray})       

        } else{
          alert('No user found');
          this.setState({
            student:[]
          });
        }
      })
    }, function(error) {
      console.log('Transaction ERROR: ' + error.message);
    }, function() {
      console.log('Populated database OK');
    })  

  }

  updateHandler = (id) => {
    let that = this;
    const {name} = this.state;
    const {email} = this.state;

    let k=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(name){
      if(email){
        if(k.test(email)){
          db.transaction( function(tx){                
            tx.executeSql('UPDATE user SET user_name=?, user_email=? where user_id='+ id +'', [name, email], (tx, results) => {
              
              console.log("row",results.rowsAffected);
                if(results.rowsAffected){
                  Alert.alert('Success', 'Updated Successfully',
                  [
                    {
                      text: 'Ok',
                      onPress: () =>
                        that.componentDidMount(id)
                    },
                  ],
                  { cancelable: false })
                } else {
                  alert('Update Failed');
                }
              
            })
          }, function(error) {
            console.log('Transaction ERROR: ' + error.message);
          }, function() {
            console.log('Populated database OK');
          })
        } else {
          alert('Please type a valid email')
        }
      } else {
        alert('Email is mandatory')
      }

    } else {
      alert('Name is mandatory')
    }
  }

  nameEdit = () => {
    this.setState({
      ...this.state,
      edit:{
        ...this.edit,
        name:true
      }
    })
  }
  emailEdit = () => {
    this.setState({
      ...this.state,
      edit:{
        ...this.edit,
        email:true
      }
    })
  }

  changePass = (id) => {
    const {newpass} = this.state;
    const {conpass} = this.state;

    if(newpass){
      if(conpass){
        if(newpass === conpass){
          db.transaction( function(tx){                
            tx.executeSql('UPDATE user SET user_pass=? where user_id='+ id +'', [newpass], (tx, results) => {
              
              console.log("row",results.rowsAffected);
                if(results.rowsAffected){
                  Alert.alert('Success', 'Updated Successfully',
                  [
                    {
                      text: 'Ok',
                      onPress: () =>
                        that.componentDidMount(id)
                    },
                  ],
                  { cancelable: false })
                } else {
                  alert('Update Failed');
                }
              
            })
          }, function(error) {
            console.log('Transaction ERROR: ' + error.message);
          }, function() {
            console.log('Populated database OK');
          })
        } else {
          alert('Passwords doesnot match')
        }

      } else {
        alert('Confirm password is mandatory')
      }

    } else {
      alert('Password is mandatory')
    }
  }

  
    render() {
      console.log("props in profile", this.state);

      let profile=null;

      if(this.state.profile.length > 0){
        profile = this.state.profile.map((user) => {
          return (
            <View style={{width:'100%', padding:20}}>

            <View style={{ borderBottomColor: 'tomato', borderBottomWidth: 1, width:'100%', alignSelf:'flex-start'}}>
              <Text style={styles.headText}>Personal Details</Text>
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{width:'30%'}}>Name:</Text>
                <TextInput value={user.user_name} onChangeText={name => this.setState({ name })}  style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1,}} editable={this.state.edit.name ? true : false}/>
                <TouchableOpacity onPress={this.nameEdit}>
                        <Icons name="md-create" size={20}  />
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{width:'30%'}}>Email:</Text>
                <TextInput value={user.user_email} onChangeText={email => this.setState({ email })} style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1}} editable={this.state.edit.email ? true : false}/>
                <TouchableOpacity onPress={this.emailEdit}>
                        <Icons name="md-create" size={20} />
                </TouchableOpacity>
            </View>

            <View style={{marginTop:10, padding:10}}>
                <Button title='Save' color='tomato' onPress={() => this.updateHandler(user.user_id)}/>              
            </View>

          </View>
          );
        })
      }

      let ChangePass = null;

      if(this.state.profile.length > 0){

      ChangePass = this.state.profile.map((user) => {
        return (
        <TouchableOpacity>
                  <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                  <Text style={{width:'30%'}}>New Password:</Text>
                  <TextInput style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1,}} onChangeText={newpass => this.setState({ newpass })}/>
                  </View>

                  <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                  <Text style={{width:'30%'}}>Confirm Password:</Text>
                  <TextInput style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1,}} onChangeText={conpass => this.setState({ conpass })}/>
                  </View>

                  <View style={{marginTop:10, padding:10}}>
                  <Button title='Change Password' color='tomato' onPress={() => this.changePass(user.user_id)}/>              
                  </View>
            </TouchableOpacity>
      )
      })
      }

      return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', backgroundColor:'#f7f7f7' }}>
          <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: 'tomato', width: '100%', height:62}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Image source={require('./assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              </TouchableOpacity>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:26}}>User Profile</Text>
          </View>


          {profile}

          <View style={{width:'100%', padding:20}}>

            <View style={{ borderBottomColor: 'tomato', borderBottomWidth: 1, width:'100%', alignSelf:'flex-start'}}>
              <TouchableOpacity onPress={() => this.setState({pass: !this.state.pass})}><Text style={styles.headText}>Change Password</Text></TouchableOpacity>
            </View>


            {/* <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                <Text style={{width:'30%'}}>Old Password:</Text>
                <TextInput style={{width: '60%', borderBottomColor: 'black', borderBottomWidth: 1,}}/>
            </View> */}

            {this.state.pass ? ChangePass  :  null  }

            

          </View>

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
    },headText:{
      fontFamily:'Muli',
      fontSize:16,
      color:'#553850',
      marginBottom:10
    },
  })

  export default ProfileScreen;