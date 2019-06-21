import React,{Component} from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, Button, Picker,Image, TouchableOpacity, Switch } from 'react-native';

import Icons from 'react-native-vector-icons/Ionicons';

class InactiveScreen extends Component {
  
  render() {

    return (
      <ScrollView>
      <View style={styles.container}>
            {/* <View style={{flexDirection: 'row', justifyContent:'flex-start', alignItems:'center', backgroundColor: '#f7f7f7', width: '100%', height:62}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('TabIndex')}>
                <Image source={require('./assests/images/drawable-hdpi/path_5.png')} style={{marginLeft:17}}/>
              </TouchableOpacity>
              <Text style={{fontFamily: "Muli",fontSize: 20,fontWeight: "bold",fontStyle: "normal",letterSpacing: 0,color: "#553850", marginLeft:26}}>Student Registration</Text>
            </View> */}
            <View style={styles.outerContainer}>
              <View style={styles.innerContainer}>

                <View style={styles.headerTab}>

                  <View>
                    <Text style={styles.headText}>Name</Text>
                  </View>

                  <View style={{flexDirection:'row'}}>
                    <Icons name="md-create" size={20} style={{width:40}} />
                    <Icons name="md-trash" size={20} style={{width:60}}/>
                    <Switch style={{height:20, width:30}} />
                  </View>

                </View>

                <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width:'100%', alignSelf:'center'}}/>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Qualification:</Text>
                  <Text style={styles.text}>Value</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Address:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>City:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>State:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Country:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>
              </View>

              <View style={styles.innerContainer}>

                <View style={styles.headerTab}>
                  <View>
                    <Text style={styles.headText}>Name</Text>
                  </View>

                  <View style={{flexDirection:'row'}}>
                    <Icons name="md-create" size={20} style={{width:40}} />
                    <Icons name="md-trash" size={20} style={{width:60}}/>
                    <Switch style={{height:20, width:30}} />
                  </View>
                </View>
                  <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width:'100%', alignSelf:'center'}}/>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Qualification:</Text>
                  <Text style={styles.text}>Value</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Address:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>City:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>State:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Country:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>
              </View>

              <View style={styles.innerContainer}>

                <View style={styles.headerTab}>
                  <Text style={styles.headText}>Name</Text>
                </View>
                  <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width:'100%', alignSelf:'center'}}/>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Qualification:</Text>
                  <Text style={styles.text}>Value</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Address:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>City:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>State:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Country:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>
              </View>

              <View style={styles.innerContainer}>

                <View style={styles.headerTab}>
                  <Text style={styles.headText}>Name</Text>
                </View>
                  <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width:'100%', alignSelf:'center'}}/>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Qualification:</Text>
                  <Text style={styles.text}>Value</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Address:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>City:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>State:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Country:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>
              </View>

              <View style={styles.innerContainer}>

                <View style={styles.headerTab}>
                  <Text style={styles.headText}>Name</Text>
                </View>
                  <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width:'100%', alignSelf:'center'}}/>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Qualification:</Text>
                  <Text style={styles.text}>Value</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Address:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>City:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>State:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Country:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>
              </View>

              <View style={styles.innerContainer}>

                <View style={styles.headerTab}>
                  <Text style={styles.headText}>Name</Text>
                </View>
                  <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width:'100%', alignSelf:'center'}}/>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Qualification:</Text>
                  <Text style={styles.text}>Value</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Address:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>City:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>State:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Country:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>
              </View>

              <View style={styles.innerContainer}>

                <View style={styles.headerTab}>
                  <Text style={styles.headText}>Name</Text>
                </View>
                  <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width:'100%', alignSelf:'center'}}/>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Qualification:</Text>
                  <Text style={styles.text}>Value</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Address:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>City:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>State:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Country:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>
              </View>

              <View style={styles.innerContainer}>

                <View style={styles.headerTab}>
                  <Text style={styles.headText}>Name</Text>
                </View>
                  <View style={{ borderBottomColor: '#F7F7F7', borderBottomWidth: 1, width:'100%', alignSelf:'center'}}/>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Qualification:</Text>
                  <Text style={styles.text}>Value</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Address:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>City:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>State:</Text>
                  <Text style={styles.text}>Value:</Text>
                </View>

                <View style={styles.detailsTab}>
                  <Text style={styles.text}>Country:</Text>
                  <Text style={styles.text}>Value:</Text>
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
    borderWidth: 1.5,
    borderColor: '#f7f7f7',
    margin:2
  },
  text:{
    fontFamily:'Muli',
    fontSize:12,
  },
  headText:{
    fontFamily:'Muli',
    fontSize:16,
  },
  textInput:{
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  headerTab:{
    padding: 2,
    backgroundColor:'#ffffff',
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

export default InactiveScreen;