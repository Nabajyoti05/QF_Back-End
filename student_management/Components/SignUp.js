import React,{Component} from 'react';
import { Text, View, TextInput, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';



class SignUp extends Component {

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
                <TextInput style={styles.textInput} placeholder='Email'/>   
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Email</Text>
                <TextInput style={styles.textInput} placeholder='Email'/>   
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput} placeholder='*************'/>   
              </View>

              <View style={styles.innerContainer}>
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput style={styles.textInput} placeholder='*************'/>   
              </View>

              <View style={styles.innerContainer}>
                    <View style={{margin:5}}>
                      <Button title="Submit" color='tomato'/>
                    </View>
              </View>

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
  }
})


export default SignUp;