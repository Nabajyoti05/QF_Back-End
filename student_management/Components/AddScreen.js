import React,{Component} from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, Button, Picker,Image, TouchableOpacity } from 'react-native';



class AddScreen extends Component {
  state={
    date: new Date(),
    TextInputDisableStatus: false,
    states:[
      {name:"Andhra Pradesh"},
      {name:"Arunachal Pradesh"},
      {name:"Assam"},
      {name:"Bihar"},
      {name:"Chhattisgarh"},
      {name:"Chandigarh"},
      {name:"Dadra and Nagar Haveli"},
      {name:"Daman and Diu"},
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
      {name:"Tripura"},
      {name:"Uttar Pradesh"},
      {name:"Uttarakhand"},
      {name:"West Bengal"}
    ],
    courses: [ 
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


  render() {

    const states = this.state.states.map((state) => {
      return <Picker.Item label={state.name} value={state.name} style={styles.text}/>
    })

    const courses = this.state.courses.map((course) => {
      return <Picker.Item label={course.name} value={course.name} style={styles.text}/> 
    })

    return (
      <ScrollView>
      <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: 'tomato', width: '100%', height:62}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TabIndex')}>
                <Image source={require('./assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              </TouchableOpacity>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#ffffff", marginLeft:26}}>Student Registration</Text>
            </View>
          <View style={styles.outerContainer}>
              <View style={styles.innerContainer}>
                {/* <Text style={styles.text}>Name</Text> */}
                <TextInput style={styles.textInput} placeholder='First Name'/>   
              </View>

              <View style={styles.innerContainer}>
                <TextInput style={styles.textInput} placeholder='Middle Name'/>   
              </View>

              <View style={styles.innerContainer}>
                <TextInput style={styles.textInput} placeholder='Last Name'/>   
              </View>

              <View style={styles.innerContainer}>
                <View style={{flexDirection:'row'}}>

                    <View style={{width:'70%', marginRight:2}}>
                      <Text style={styles.text}>DOB</Text>
                      <TextInput style={styles.textInput} placeholder='DD/MM/YYYY'/>
                    </View>
                    
                    <View style={{width:'30%', marginLeft:2}}>
                      <Text style={styles.text}>Age</Text>
                      <TextInput style={styles.textInput} placeholder='Age' editable={this.state.TextInputDisableStatus}/>
                    </View>
                </View>   
              </View>

              <View style={styles.innerContainer}>
                    <View style={{width:'100%', flexDirection:'column'}}>
                      <Text style={styles.text}>Highest Qualification</Text>
                      <Picker
                          selectedValue={this.state.language}
                          style={{height:25, marginTop:10}}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                          }>
                            {courses}
                        </Picker>
                      {/* <TextInput style={styles.textInput} placeholder='Course Name'/> */}
                    </View> 

                    <View style={{flexDirection:'column',marginTop:20}}>
                      <Text style={styles.text}>Specialization</Text>
                      <TextInput style={styles.textInput} placeholder='Specialization Name'/>
                    </View> 
              </View> 

              <View style={styles.innerContainer}>
                    <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                      <Text style={styles.text}>Address Line1</Text>                      
                      <TextInput style={styles.textInput} placeholder='House No/ Lane/ Locality'/>
                    </View> 

                    <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                      <Text style={styles.text}>Address Line2 (Optional)</Text>
                      <TextInput style={styles.textInput} placeholder='Landmark/ Additional address'/>
                    </View> 

                    <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                      <Text style={styles.text}>City</Text>
                      <TextInput style={styles.textInput} placeholder='City'/>
                    </View> 

                    <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                      <Text style={styles.text}>State</Text>
                      <Picker
                          selectedValue={this.state.language}
                          style={{height:25, marginTop:10}}
                          onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                          }>
                            {states}
                        </Picker>
                      {/* <TextInput style={styles.textInput} placeholder='State'/> */}
                    </View> 

                    <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                      <Text style={styles.text}>Pincode</Text>
                      <TextInput style={styles.textInput} placeholder='Pincode'/>
                    </View> 

                    <View style={{width:'100%', flexDirection:'column', marginBottom:20}}>
                      <Text style={styles.text}>Country</Text>
                      <TextInput style={styles.textInput} placeholder='Country'/>
                    </View> 
              </View> 

              <View style={styles.innerContainer}>
                    <View style={{margin:5}}>
                      <Button title="Submit" color='tomato'/>
                    </View>
              </View>

          </View>        
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