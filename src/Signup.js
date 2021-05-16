import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class Login extends React.Component {
  render() {
    return(
      <View>
        <View style={{ marginTop: 30 }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
            <Text style={styles.nonActive}>SignIn</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.active}>SignUp</Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 100}}>
          <TextInput
          placeholder='Name'
          style={styles.inputField}
          />
          <TextInput
          placeholder='Email'
          keyboardType={'email-address'}
          style={styles.inputField}
          />
          <TextInput
          placeholder='Password'
          secureTextEntry={true}
          style={styles.inputField}
          />
          <TextInput
          placeholder='Confirm Password'
          secureTextEntry={true}
          style={styles.inputField}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('terms')}>
            <Text style={styles.forgetPass}>Terms & Conditions</Text>
          </TouchableOpacity>
          <Button title='SignUp' buttonStyle={styles.btnStyles} titleStyle={{fontSize: 17}} onPress={() => this.props.navigation.navigate('home')} />
        </View>
      </View>
    )
  }
}

export default Login;
