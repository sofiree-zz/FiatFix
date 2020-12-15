import React, {Component} from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';



import Constants from 'expo-constants';
import Facebook  from './facebook';
import Google  from './google';
import Fiatlady from './fiatlady';
import Shortbar from './shortbar'

const {height, width} = Dimensions.get('window');

class Onboard extends Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      modalVisible: false, 
    }
   
  }

  
  render(){
    return(
      <View style={styles.onboardcontainer}>   
         
          <Fiatlady style={styles.fiatimage}/>

          <View style={styles.onboardviewer} >
            
              <Text style={styles.onboardtext1}>
              Have Some Fiat? 
              </Text>

              <Text style={styles.onboardtext2}> 
                Let's help you fix it 
              </Text>

              <Text style={styles.onboardtext3}>
                In Split Seconds fund your local 
                account and invest treanding crypto tokens
              </Text>

          </View>   

          <View style={styles.onboardbuttons}>

            <TouchableOpacity
              style={styles.onboardloginbutton}
              onPress={() => this.setState({ 
                        ...this.state, 
                        modalVisible: true,
                        coverScreen: false
                    })} 
            >
              <Text  style={styles.loginbuttontext}>
                lOGIN
              </Text>
            </TouchableOpacity>

               

          </View>   

          <View style={styles.onboardfooter}>
              <Text style={styles.socialtext}>
                Use google or Facebook
              </Text>
              <Google/>
              <Facebook/>                    
          </View>       
         
          <Shortbar style={styles.onboardbar}/>
          



        <Modal
          isVisible={this.state.modalVisible}
                    style={styles.modal}      
                    onBackdropPress={() => this.setState({ 
                        ...this.state, 
                        modalVisible: false
                    })}
          avoidKeyboard='false'
          animationType='fade'
          animationDuration={500}
        
        >

          <View  style={styles.modalcontainer}>
            <Text>
              login
            </Text>

          
            <TextInput
              style={styles.modalinput}
              placeholder="email"
              autoCapitalize="none"
              placeholderTextColor='grey'
              onChangeText={this.onChangeText}
            />
       
            <TextInput
              style={styles.modalinput}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor='grey'
            />

            <TouchableOpacity
              style={styles.modalloginbtn}      
            >
                <Text  style={styles.loginbuttontext}>
                  lOGIN
                </Text>
            </TouchableOpacity>  
        </View>   
      </Modal>

          

      </View>
    );
  }
}

const styles = StyleSheet.create({
  onboardcontainer:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"white",
  },

  fiatimage:{
    marginTop:30,
    width:0.6 * width,
    height: 0.7 * height,
    resizeMode: 'contain',
  },

  onboardviewer:{
   top:5,
  },

  onboardtext1:{
    color:"#347AF0",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "SF Pro Display",
    textAlign: "center",
  },

  onboardtext2:{
    top: 10,
    fontSize: 12,
    color: "#347AF0",
    fontFamily: "SF Pro Display",
    fontWeight: "bold",
    textAlign: "center",
  },

   onboardtext3:{
    top: 5,
    fontSize: 12,
    fontFamily: "SF Pro Display",
    textAlign: "center",
    
  },

  onboardbuttons:{
    top:30,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },

   onboardloginbutton:{
    height:52,
    width: 137,
    left: -20,
    backgroundColor:"#347AF0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: "center",
  },
  loginbuttontext:{
    top: 15,
    textAlign:"center",
    fontSize: 10,
    color: "white",
  }, 

 onboardfooter:{
    top: -25,
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
  },

  socialtext:{
    fontSize:12 ,
  },

  onboardbar:{
    top: -4,
  },

  modal:{
    marginTop: height/2,
    backgroundColor: 'white',
    borderTopLeftRadius:19,
    borderTopRightRadius:19,
  },

  modalcontainer: {
    marginTop: - height/2,
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',

  },

   modalinput: {
    width: 350,
    height: 55,
    backgroundColor: '#fffff',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    borderColor:'#347AF0',
    borderWidth:2,
    fontSize: 18,
    fontWeight: 500,
  },
  
  modalloginbtn:{
    height:52,
    width: 137,
    backgroundColor:"#347AF0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: "center",
  }
});

export default Onboard;