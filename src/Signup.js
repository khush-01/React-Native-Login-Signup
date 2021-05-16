import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  handleName = value => {
    this.setState({
      name: value,
    });
  };

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

    if (this.state.name.length === 0) {
      this.setState({
        error: 'Name cannot be empty'
      });

      return false;
    } else if (!expression.test(this.state.email)) {
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
  };


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
          onChangeText={this.handleName}
          placeholder='Name'
          style={styles.inputField}
          />
          <TextInput
          onChangeText={this.handleEmail}
          placeholder='Email'
          keyboardType={'email-address'}
          style={styles.inputField}
          />
          <TextInput
          onChangeText={this.handlePwd}
          placeholder='Password'
          secureTextEntry={true}
          style={styles.inputField}
          />
          <TextInput
          onChangeText={this.handleConfirmPwd}
          placeholder='Confirm Password'
          secureTextEntry={true}
          style={styles.inputField}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('terms')}>
            <Text style={styles.forgetPass}>Terms & Conditions</Text>
          </TouchableOpacity>
          {this.state.error.length === 0 ? null : (
            <Text style={styles.error}>{this.state.error}</Text>
          )}
          <Button title='SignUp' buttonStyle={styles.btnStyles} titleStyle={{fontSize: 17}} onPress={this.submit} />
        </View>
      </View>
    )
  }
}

export default Login;
