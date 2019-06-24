import React,{Component} from 'react';
import { Modal,Text, View, TextInput, StyleSheet, ScrollView, Image, Picker,Alert, TouchableOpacity, Switch, TouchableHighlight} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

import { openDatabase } from 'react-native-sqlite-storage';
import moment from 'moment';
const db = openDatabase({ name: 'users_db.db', createFromLocation :'~www/users_db.db'});

class AllStudentsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      student:[],
      toggle:[]
    };


    db.transaction(function(txn) {
      txn.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='students'", [], function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS user', []);
            txn.executeSql('CREATE TABLE IF NOT EXISTS students(stud_id INTEGER PRIMARY KEY AUTOINCREMENT, stud_fname VARCHAR(20), stud_mname VARCHAR(20), stud_lname VARCHAR(20), stud_dob DATETIME, age INTEGER(10), degree VARCHAR(20), specialization VARCHAR(20), address1 VARCHAR(20), address2 VARCHAR(20), city VARCHAR(20), state VARCHAR(20), pincode INTEGER(10), country VARCHAR(20))', [], 
              function(error){
                console.log('error', error)
            }, function(){
              console.log('table created')
            } );
          }
        });
    }, function(error) {
      console.log('Transaction ERROR: ' + error.message);
    }, function() {
      console.log('Populated database OK');
    })
  }


  componentDidMount(){

    console.log("props", this.props.navigation.state.params.stud_id)

    let stud_id = this.props.navigation.state.params.stud_id;

    let resultArray=[];
    let result;
    let that = this;
    db.transaction(function(txn) {

      txn.executeSql('SELECT * FROM students where stud_id='+ stud_id +'', [], (tx, results) => {

        console.log('results',results)

        if (results.rows.length !== 0) {
          
            result = results.rows.item(0);
            resultArray.push(result);
            // console.log("single", resultArray)
            that.setState({student: resultArray})       

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

  toggleHandler = (id, active) => {
    let that = this;
    if(active === 1){
      db.transaction(function(txn) {
        txn.executeSql('UPDATE students SET active=0 where stud_id='+ id +' ', [], (tx, results) => {
          // console.log('results',results)
  
          if (results.rowsAffected) {

            alert('Student is Deactivated!')
            that.componentDidMount(id);
  
          } else{
            alert('Something went wrong');
          }
        })
      }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
      }, function() {
        console.log('Populated database OK');
      })  
    } else if( active === 0){
      db.transaction(function(txn) {
        txn.executeSql('UPDATE students SET active=1 where stud_id='+ id +' ', [], (tx, results) => {
          // console.log('results',results)
  
          if (results.rowsAffected) {
            
            alert('Student is Activated!')
            that.componentDidMount(id);
  
          } else{
            alert('Something went wrong');
          }
        })
      }, function(error) {
        console.log('Transaction ERROR: ' + error.message);
      }, function() {
        console.log('Populated database OK');
      })  
    }
  }

  alertHandler = (id) => {
    Alert.alert('Warning', 'Do you want to Delete the Record ?',
    [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
      {
        text: 'Ok',
        onPress:() => this.deleteHandler(id),
      },
    ])
  }

  deleteHandler = (id) => {
    db.transaction(function(txn) {
      txn.executeSql('UPDATE students SET deleted=1, active=0 where stud_id='+ id +' ', [], (tx, results) => {
        // console.log('results',results)

        if (results.rowsAffected) {
          
          alert('Student is Activated!')
          that.componentDidMount(id);

        } else{
          alert('Something went wrong');
        }
      })
    }, function(error) {
      console.log('Transaction ERROR: ' + error.message);
    }, function() {
      console.log('Populated database OK');
    })                
  }
  
  render() {
    let studs = null;
    console.log("This props",this.state);

    if(this.state.student.length > 0){
      studs = this.state.student.map((item) => {
        return (
                    <View style={styles.innerContainer}>
                      <View style={styles.headerTab}>
                          <View>
                            <Text style={styles.headText}>Student Details</Text>
                          </View>

                          <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Edit", { stud_id: item.stud_id})}>
                                <Icons name="md-create" size={20} style={{width:40}} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.deleteHandler(item.stud_id)}>
                                <Icons name="md-trash" size={20} style={{width:60}}/>
                            </TouchableOpacity>
                            <Switch style={{height:20, width:30}} value={item.active === 1 ? true : false} onValueChange={() => this.toggleHandler(item.stud_id, item.active)}/>
                          </View>
                      </View>

                      <View style={{ borderBottomColor: '#c0c1c4', borderBottomWidth: 1, width:'100%', alignSelf:'center', marginTop:10}}/>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>First Name:</Text>
                        <Text style={styles.text}>{item.stud_fname}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Middle Name</Text>
                        <Text style={styles.text}>{item.stud_mname}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Last Name:</Text>
                        <Text style={styles.text}>{item.stud_lname}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>DOB:</Text>
                        <Text style={styles.text}>{moment(item.stud_dob).format('DD MMM YYYY')}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Age:</Text>
                        <Text style={styles.text}>{item.age}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Qualification:</Text>
                        <Text style={styles.text}>{item.degree}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Specialization:</Text>
                        <Text style={styles.text}>{item.specialization}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Address:</Text>
                        <Text style={styles.text}>{item.address1}{', '}{item.address2}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>City:</Text>
                        <Text style={styles.text}>{item.city}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>State:</Text>
                        <Text style={styles.text}>{item.state}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Pincode:</Text>
                        <Text style={styles.text}>{item.pincode}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Country:</Text>
                        <Text style={styles.text}>{item.country}</Text>
                      </View>
                  </View>
                  
                  )
        })
      } else {
        studs = <View style={{alignSelf: 'center', marginTop:50}}><Text style={styles.text}>No Student Found!</Text></View>
      }
        
    return (
      <ScrollView>
      <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: 'tomato', width: '100%', height:62}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TabIndex')}>
                <Image source={require('../assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              </TouchableOpacity>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:26}}>Student Details</Text>
            </View>
            {/* <View style={styles.outerContainer}> */}
              {studs}
            {/* </View>                */}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
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
    width:'95%',
    flexDirection:'column',
    padding: 10,
    borderWidth: 3,
    borderColor: '#c0c1c4',
    margin:2,
    borderRadius:10,
    marginTop:5
  },
  text:{
    fontFamily:'Muli',
    fontSize:14,
    color:'#646970',
    marginTop:25,
    marginLeft:10,
  },
  headText:{
    fontFamily:'Muli',
    fontSize:16,
    color:'#553850'
  },
  textInput:{
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  headerTab:{
    padding: 2,
    // backgroundColor:'#ffffff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  detailsTab:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  }
})

export default AllStudentsScreen;