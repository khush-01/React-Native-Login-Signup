import React from 'react';
import { Text, View } from 'react-native';

class LoggedIn extends React.Component {
  render() {
    return(
      <View>
        <Text>
          You are successfully logged in!
        </Text>
        <Text style={{fontSize: 20}}>
          {this.props.route.params.email}
        </Text>
      </View>
    )
  }
}

export default LoggedIn;
