import React,{Component} from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, Button, Picker,Image, TouchableOpacity, Alert } from 'react-native';

import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import { openDatabase } from 'react-native-sqlite-storage';
const db = openDatabase({ name: 'users_db.db', createFromLocation :'~www/users_db.db'});

class AddScreen extends Component {
  state={
    date: moment().subtract(5, "years"),
    age:null,
    TextInputDisableStatus: false,
    state:[],
    course:[],
    student:[],
    stud:false,
    states:[
      {name:'select'},
      {name:"Andhra Pradesh"},
      {name:"Arunachal Pradesh"},
      {name:"Assam"},
      {name:"Bihar"},
      {name:"Chhattisgarh"},
      {name:"Chandigarh"},
      {name:"Delhi"},
      {name:"Goa"},
      {name:"Gujarat"},
      {name:"Haryana"},
      {name:"Himachal Pradesh"},
      {name:"Jammu and Kashmir"},
      {name:"Jharkhand"},
      {name:"Karnataka"},
      {name:"Kerala"},
      {name:"Madhya Pradesh"},
      {name:"Maharashtra"},
      {name:"Manipur"},
      {name:"Meghalaya"},
      {name:"Mizoram"},
      {name:"Nagaland"},
      {name:"Orissa"},
      {name:"Punjab"},
      {name:"Pondicherry"},
      {name:"Rajasthan"},
      {name:"Sikkim"},
      {name:"Tamil Nadu"},
      {name:"Telangana"},
      {name:"Tripura"},
      {name:"Uttar Pradesh"},
      {name:"Uttarakhand"},
      {name:"West Bengal"}
    ],
    courses: [
      {name: 'select'},
      {name: '12th'},
      {name: 'BA'},
      {name: 'BCom'},
      {name: 'BBA'},
      {name: 'BCA'},
      {name: 'BCS'},
      {name: 'BSC'},
      {name: 'MA'},
      {name: 'Mcom'},
      {name: 'MBA'},
      {name: 'MCA'},
      {name: 'MCS'},
      {name: 'MSC'},
    ]
  }

  componentDidMount(){
    let age = moment(this.state.date).fromNow(true)

    console.log("props", this.props.navigation.state.params.stud_id)

    let stud_id = this.props.navigation.state.params.stud_id;

    let course = null;
    let state = null;
    let resultArray=[];
    let result;
    let that = this;
    db.transaction(function(txn) {

      txn.executeSql('SELECT * FROM students where stud_id='+ stud_id +'', [], (tx, results) => {

        console.log('results',results)

        if (results.rows.length !== 0) {
          
            result = results.rows.item(0);
            resultArray.push(result);

            state=results.rows.item(0).state
            course=results.rows.item(0).degree
            // console.log("single", resultArray)
            that.setState({
                student: resultArray,
                
            })       

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

    this.setState({
      age: age,
      course:{name: 'select'},
      state:{name: 'select'},
    })
  }

  courseHandler = (course) => {
    this.setState({
      ...this.state,
      course: course
    })
  }

  stateHandler = (state) => {
    this.setState({
      ...this.state,
      state: state
    })
  }

  addStudent = () => {
    const {fname} = this.state;
    const {mname} = this.state;
    const {lname} = this.state;
    const dob = moment(this.state.date).format('DD-MM-YYYY');
    const age = this.state.age;
    const course = this.state.course;
    const {special} = this.state;
    const {address1} = this.state;
    const {address2} = this.state;
    const {city} = this.state;
    const state = this.state.state;
    const {pincode} = this.state;
    const {country} = this.state;
    console.log("Course", state)

    if(fname){
      if(mname){
        if(lname){
            if(this.state.course.name !== 'select'){
              if(this.state.course !== 'select'){
                if(special){
                  if(address1){
                      if(city){
                        if(this.state.state.name !== 'select'){
                          if(this.state.state !== 'select'){
                            if(pincode){
                              if(country){

                                db.transaction( function(tx){                
                                  tx.executeSql('UPDATE students SET(stud_fname, stud_mname, stud_lname, stud_dob, age, degree, specialization, address1, address2, city, state, pincode, country) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [fname, mname, lname, dob, age, course ,special, address1,address2 ? address2 : null,city, state, pincode, country], (tx, results) => {
                                    
                                    console.log("row",results.rowsAffected);
                                      if(results.rowsAffected){
                                        Alert.alert('Success', 'Updated Successfully',
                                        [
                                          {
                                            text: 'Ok',
                                            onPress: () =>
                                              that.props.navigation.navigate("TabIndex"),
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
                              }
                              else {
                                alert('Country is mandatory')
                              }
                            }else {
                              alert('Pin Code is mandatory')
                          }
                        }else {
                            alert('State is mandatory')
                          }
                        }else {
                          alert('State is mandatory')
                        }
                      }
                       else {
                        alert('City is mandatory')
                      }                  
                  }else {
                    alert('Address LIne 1 is mandatory')
                  }
                }else {
                  alert('Speacialization is mandatory')
                }
              }else {
                alert('Course is mandatory')
              }
            }else {
              alert('Course is mandatory')
            }
        }else {
          alert('Last Name is mandatory')
        }
      } else {
        alert('Middle Name is mandatory')
      }
    } else {
      alert('First Name is mandatory')
    }
  }

  

  dateHandler = (date) => {
    console.log('Date', date)

    let age = moment(date).fromNow(true)

    this.setState({
      date: date,
      age: age
    })
  }

  render() {
      console.log("state", this.state)

      const states = this.state.states.map((state) => {
        return <Picker.Item label={state.name} value={state.name} style={styles.text}/>
      })
  
      const courses = this.state.courses.map((course) => {
        return <Picker.Item label={course.name} value={course.name} style={styles.text}/> 
      })

      let studs = null;

      if(this.state.student.length > 0){
        studs = this.state.student.map((item) => {
          return (
            <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
              {/* <Text style={styles.text}>Name</Text> */}
              <TextInput style={styles.textInput} placeholder='First Name' value={item.stud_fname} onChangeText={fname => this.setState({ fname })}/>   
            </View>

            <View style={styles.innerContainer}>
              <TextInput style={styles.textInput} placeholder='Middle Name' value={item.stud_mname} onChangeText={mname => this.setState({ mname })}/>   
            </View>

            <View style={styles.innerContainer}>
              <TextInput style={styles.textInput} placeholder='Last Name' value={item.stud_lname} onChangeText={lname => this.setState({ lname })}/>   
            </View>

            <View style={styles.innerContainer}>
              <View style={{flexDirection:'row'}}>

                  <View style={{width:'70%', marginRight:2}}>
                    <Text style={styles.text}>DOB</Text>
                    <DatePicker style={{width: '90%', marginTop:10}} 
                                placeholder="select date"
                                date={moment(item.stud_dob).format('DD-MM-YYYY')}
                                mode="date"
                                format="DD-MM-YYYY"
                                maxDate={moment().subtract(5, 'years')}
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                onDateChange={(date) => {this.dateHandler(date)}}/>

                    {/* <TextInput style={styles.textInput} placeholder='DD/MM/YYYY' onChangeText={dob => this.setState({ dob })}/> */}
                  </View>
                  
                  <View style={{width:'30%', marginLeft:2}}>
                    <Text style={styles.text}>Age</Text>
                    <TextInput style={{width: '100%',borderBottomColor: 'black',borderBottomWidth: 1,marginBottom:10}} placeholder='Age' value={item.age} editable={this.state.TextInputDisableStatus}/>
                  </View>
              </View>   
            </View>

            <View style={styles.innerContainer}>
                  <View style={{width:'100%', flexDirection:'column'}}>
                    <Text style={styles.text}>Highest Qualification</Text>
                    <Picker
                        selectedValue={this.state.course}
                        style={{height:25, marginTop:10}}
                        onValueChange={(itemValue, itemIndex) =>
                        this.courseHandler(itemValue)                          
                        }>
                          {courses}
                      </Picker>
                    {/* <TextInput style={styles.textInput} placeholder='Course Name'/> */}
                  </View> 

                  <View style={{flexDirection:'column',marginTop:20}}>
                    <Text style={styles.text}>Specialization</Text>
                    <TextInput style={styles.textInput} placeholder='Specialization Name' value={item.specialization} onChangeText={special => this.setState({ special })}/>
                  </View> 
            </View> 

            <View style={styles.innerContainer}>
                  <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                    <Text style={styles.text}>Address Line1</Text>                      
                    <TextInput style={styles.textInput} placeholder='House No/ Lane/ Locality' value={item.address1} onChangeText={address1 => this.setState({ address1 })}/>
                  </View> 

                  <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                    <Text style={styles.text}>Address Line2 (Optional)</Text>
                    <TextInput style={styles.textInput} placeholder='Landmark/ Additional address' value={item.address2} onChangeText={address2 => this.setState({ address2 })}/>
                  </View> 

                  <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                    <Text style={styles.text}>City</Text>
                    <TextInput style={styles.textInput} placeholder='City' value={item.city} onChangeText={city => this.setState({ city })}/>
                  </View> 

                  <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                    <Text style={styles.text}>State</Text>
                    <Picker
                        selectedValue={this.state.state}
                        style={{height:25, marginTop:10}}
                        onValueChange={(itemValue, itemIndex) =>
                          this.stateHandler(itemValue)
                        }>
                          {states}
                      </Picker>
                    {/* <TextInput style={styles.textInput} placeholder='State'/> */}
                  </View> 

                  <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                    <Text style={styles.text}>Pincode</Text>
                    <TextInput style={styles.textInput} placeholder='Pincode' value={item.pincode} onChangeText={pincode => this.setState({ pincode })}/>
                  </View> 

                  <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                    <Text style={styles.text}>Country</Text>
                    <TextInput style={styles.textInput} placeholder='Country' value={item.country} onChangeText={country => this.setState({ country })}/>
                  </View> 
            </View> 

            <View style={styles.innerContainer}>
                  <View style={{margin:5}}>
                    <Button title="Update" color='tomato' onPress={this.addStudent.bind(this)}/>
                  </View>
            </View>

        </View> 
          )
        
        })
        
    }

    

    return (
      <ScrollView>
      <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: 'tomato', width: '100%', height:62}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('View')}>
                <Image source={require('./assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              </TouchableOpacity>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:26}}>Update</Text>
            </View>
                 {studs}
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
    backgroundColor:'#ffffff'
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

export default AddScreen;