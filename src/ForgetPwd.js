import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class ForgetPwd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  handleEmail = value => {
    this.setState({
      email: value,
    });
  };

  handlePwd = value => {
    this.setState({
      password: value,
    });
  };

  handleConfirmPwd = value => {
    this.setState({
      confirmPassword: value,
    });
  };

  validate = () => {
    this.setState({
      error: '',
    });

    const expression =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!expression.test(this.state.email)) {
      this.setState({
        error: 'Invalid Email',
      });
      
      return false;
    } else if (this.state.password.length < 8) {
      this.setState({
        error: 'Password is too short',
      });

      return false;
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: "Passwords don't match.",
      });

      return false;
    }

    return true;
  };

  submit = () => {
    if (this.validate()) {
      this.props.navigation.navigate('home', {
          email: this.state.email
      });
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.active}>Forget Password</Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <TextInput
          onChangeText={this.handleEmail}
          placeholder='Email'
          keyboardType={'email-address'}
          style={styles.inputField}
          />
          <TextInput
          onChangeText={this.handlePwd}
          placeholder='New Password'
          secureTextEntry={true}
          style={styles.inputField}
          />
          <TextInput
          onChangeText={this.handleConfirmPwd}
          placeholder='Confirm Password'
          secureTextEntry={true}
          style={styles.inputField}
          />
          {this.state.error.length === 0 ? null : (
            <Text style={styles.error}>{this.state.error}</Text>
          )}
          <Button title='Login' buttonStyle={styles.btnStyles} titleStyle={{fontSize: 17}} onPress={this.submit} />
        </View>
                
      </View>
    )
  }
}

export default ForgetPwd;
