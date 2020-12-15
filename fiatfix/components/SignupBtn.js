import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

class SignupBtn extends Component{
  render(){
    return(
      <View>
       <TouchableOpacity
            style={styles.signup}
          >
            <Text style={styles.text}>
              SIGNUP
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   signup:{
    height:52,
    width: 137,
    left: 20,
    backgroundColor:"#347AF0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: "center",
  },

  text:{
    top: 15,
    textAlign:"center",
    fontSize: 10,
    color: "white",
  }
})
export default SignupBtn;