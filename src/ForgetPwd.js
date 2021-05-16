import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class ForgetPwd extends React.Component {
  render() {
    return (
      <View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.active}>Forget Password</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <TextInput
          placeholder='Email'
          keyboardType={'email-address'}
          style={styles.inputField}
          />
          <TextInput
          placeholder='New Password'
          secureTextEntry={true}
          style={styles.inputField}
          />
          <TextInput
          placeholder='Confirm Password'
          secureTextEntry={true}
          style={styles.inputField}
          />
          <Button title='Login' buttonStyle={styles.btnStyles} titleStyle={{fontSize: 17}} onPress={() => this.props.navigation.navigate('home')} />
        </View>
                
      </View>
    )
  }
}

export default ForgetPwd;
