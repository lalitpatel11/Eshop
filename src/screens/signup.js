import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
  View, Text, ImageBackground, StyleSheet,CheckBox, TextInput, TouchableOpacity
} from 'react-native';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      checked:false,
    }
  }
  render() {
    const {navigate}=this.props.navigation;
    return (
      <ImageBackground source={require('../images/bgimage.png')} style={Styles.bgimage}>

        <View style={Styles.container}>

          <View style={Styles.text1}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Sign Up</Text>
          </View>
          <View style={Styles.textinputstyle}>
            <Icon name="user" size={25} color="blue" />
            <TextInput style={Styles.textarea} placeholder="  Name" />
          </View>

          <View style={Styles.textinputstyle}>
            <Icon name="mail" size={25} color="blue" />
            <TextInput style={Styles.textarea} placeholder="  E-mail" />
          </View>

          <View style={Styles.textinputstyle}>
            <Icon name="lock" size={25} color="blue" />
            <TextInput style={Styles.textarea} placeholder="  Password" />
          </View>

          <View style={Styles.checkboxarea}>
            <View style={{ flexDirection: "row",alignItems:'center' }}>
              <CheckBox 
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })} />
                <Text>i read and agree to</Text>
                <TouchableOpacity>
           <Text style={{ color: "blue"}}>Terms & Condition</Text>
            </TouchableOpacity>
              </View>
          </View>

          <TouchableOpacity style={Styles.buttonStyle}>
            <View >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>CREATE ACCOUNT</Text>
            </View>
          </TouchableOpacity>

          <View style={Styles.createstyle}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigate('SignIn')}>
              <Text style={{ color: "blue", fontWeight: "bold" }}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

    )
  }
}

const Styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: "center",

  },
  text1:{
marginBottom:30,
  },
  textinputstyle: {
    width: '80%',
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom:20,
    padding:5,
  },
  checkboxarea: {
    flexDirection:"row",
    alignItems:'center',
    marginBottom:20,
   
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    width: "80%",
    borderRadius: 20,
    padding:5,
    marginBottom:40,
  },
  createstyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
})