import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../actions/Login';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { name } = this.props.userInfoReducer;
    return (
      <View>
        <Text>{name}</Text>
        <Text> Login </Text>
        <TouchableOpacity
          onPress={() => this.props.changeName('333')}
          style={{ width: 200, height: 50, alignItems: 'center', backgroundColor: '#00ff00' }}
        >
          <Text>登陆</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    userInfoReducer: state.userInfo
  }),
  (dispatch) => ({
    changeName: (name) => dispatch(login(name))
  })
)(Login);
