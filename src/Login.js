import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class Login extends React.Component {
  render() {
    return(
      <View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.active}>SignIn</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
            <Text style={styles.nonActive}>SignUp</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center', marginTop: 100}}>
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
          <TouchableOpacity>
            <Text style={styles.forgetPass} onPress={() => this.props.navigation.navigate('forgetpwd')} >Forgot Password</Text>
          </TouchableOpacity>
          <Button title='Login' buttonStyle={styles.btnStyles} titleStyle={{fontSize: 17}} onPress={() => this.props.navigation.navigate('home')} />
        </View>
        
      </View>
    )
  }
}

export default Login;
