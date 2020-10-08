import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-paper'


export default class LoginPage extends Component {



  constructor(props) {
    super(props);
    this.state = {
      userName: '', passWord: ''
    }
  }


  render() {
    return (
      <View style={styles.container}>

        <TextInput
          label='   UserName'
          value={this.state.userName}
          secureTextEntry={true}
          autoCorrect={false}
          onFocus={() => this.setState({ isActive: true, })}
          onBlur={() => this.setState({ isActive: false, })}
          onChangeText={userName => this.setState({ userName })}
          mode='outlined'
        />
        <TextInput
          label='   Password'
          value={this.state.passWord}
          secureTextEntry={true}
          autoCorrect={false}
          onFocus={() => this.setState({ isActive: true, })}
          onBlur={() => this.setState({ isActive: false, })}
          onChangeText={passWord => this.setState({ passWord })}
          mode='outlined'
        />



        <TouchableOpacity onPress={() => this.VerifyLogin()}>
          <Text
            style={{
              color:
                "#000000",
              fontFamily: 'open-sans-regular',
              fontSize: 16,

              alignItems: 'center',textAlign:'center',marginTop:20
            }}>
            <Text>Sign In</Text>
          </Text>
        </TouchableOpacity>



      </View>

    );
  }
  VerifyLogin(): void {
    if (this.state.UserName == 'hruday@gmail.com' && this.state.Password == 'hruday123') {
      this.props.navigation.navigate('dashBoardPage')
    }
    else {
Alert.alert("Incorrect username or password")    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});