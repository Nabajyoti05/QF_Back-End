import React,{Component} from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, Button, Picker,FlatList, TouchableOpacity, Switch, TouchableHighlight} from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'users_db.db', createFromLocation :'~www/users_db.db'});

class AllStudentsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      stud: false      
    };

    // console.log("props", this.props.navigation.state.params.u_id)

    db.transaction(function(txn) {
      txn.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='students'", [], function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS students', []);
            txn.executeSql('CREATE TABLE IF NOT EXISTS students(stud_id INTEGER PRIMARY KEY AUTOINCREMENT, stud_fname VARCHAR(20), stud_mname VARCHAR(20), stud_lname VARCHAR(20), stud_dob DATETIME, age INTEGER(10), degree VARCHAR(20), specialization VARCHAR(20), address1 VARCHAR(20), address2 VARCHAR(20), city VARCHAR(20), state VARCHAR(20), pincode INTEGER(10), country VARCHAR(20), deleted INTEGER(10), active INTEGER(10))', [], 
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

    let resultArray=[];
    let result;
    let that = this;
    db.transaction(function(txn) {

      txn.executeSql('SELECT * FROM students where active=1 and deleted=0', [], (tx, results) => {
        // console.log('results',results)

        if (results.rows.length !== 0) {

          for (let i = 0; i < results.rows.length; ++i) {
            result = results.rows.item(i);
            resultArray = resultArray.concat(result);
            // result.push(1,0,results.rows.item(i));
            that.setState({students: resultArray, stud: true})
            console.log('Single Item',resultArray)
          }

          // console.log("New Result", result);
          

        }else{
          // alert('No user found');
          this.setState({
            students:[]
          });
        }
      })
    }, function(error) {
      console.log('Transaction ERROR: ' + error.message);
    }, function() {
      console.log('Populated database OK');
    })  

    // console.log("New Result", resultArray);
    // this.setState({students: resultArray})

  }
  
  render() {

    let studs = null;
    // console.log("This State",this.state.students);

    if(this.state.stud){
      studs = this.state.students.map((item, i) => {
          return (
            <View style={styles.innerContainer}>
                      <View style={styles.headerTab}>
                          <View>
                            <Text style={styles.headText}>{item.stud_fname}{' '}{item.stud_mname}{' '}{item.stud_lname}</Text>
                          </View>

                          {/* <View style={{flexDirection:'row'}}>
                            <TouchableOpacity >
                                <Icons name="md-create" size={20} style={{width:40}} />
                                </TouchableOpacity>
                                
                                <TouchableOpacity >
                                <Icons name="md-trash" size={20} style={{width:60}}/>
                              </TouchableOpacity>
                            <Switch style={{height:20, width:30}} value={item.active === 1 ? true : false} onValueChange={this.toggleHandler(item.stud_id, item.active)}/>
                          </View> */}
                      </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("View", { stud_id: item.stud_id})}>
                      <View style={{ borderBottomColor: '#c0c1c4', borderBottomWidth: 1, width:'100%', alignSelf:'center', marginTop:10}}/>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Qualification:</Text>
                        <Text style={styles.text}>{item.degree}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>Address:</Text>
                        <Text style={styles.text}>{item.address1}</Text>
                      </View>

                      <View style={styles.detailsTab}>
                        <Text style={styles.text}>City:</Text>
                        <Text style={styles.text}>{item.city}</Text>
                      </View>

                      {/* <View style={styles.detailsTab}>
                        <Text style={styles.text}>State:</Text>
                        <Text style={styles.text}>{item.state}</Text>
                      </View> */}

                      {/* <View style={styles.detailsTab}>
                        <Text style={styles.text}>Country:</Text>
                        <Text style={styles.text}>{item.country}</Text>
                      </View> */}
                </TouchableOpacity>                  
                  </View>
                  )
                })
          
      } else {
        studs = <View style={{alignSelf: 'center', marginTop:50}}><Text style={styles.text}>No Student Found!</Text></View>
      }
        
    return (
      <View>
      <ScrollView>
      <View style={styles.container}>
            <View style={styles.outerContainer}>
              {studs}
            </View>               
      </View>
      </ScrollView>
            {/* <View style={{position:'absolute', marginLeft:330, marginTop:560}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AddScreen')}>
                  <Icons name="md-add-circle-outline" size={50} style={{color:'tomato'}} />
              </TouchableOpacity>
            </View>   */}
      </View>
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
    flexDirection:'column',
    padding: 10,
    borderWidth: 3,
    borderColor: '#c0c1c4',
    margin:2,
    borderRadius:10,
    marginTop:10
  },
  text:{
    fontFamily:'Muli',
    fontSize:14,
    color:'#646970',
    marginTop:5,
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