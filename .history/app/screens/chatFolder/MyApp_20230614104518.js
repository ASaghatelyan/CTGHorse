import React from 'react';
import Login from './Login';
import { View,Text } from 'react-native';
import ChatClient from './ChatClient';


export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitName = this.onSubmitName.bind(this);
        this.state = {
          hasName: false
        };
      }

  onSubmitName(e) {
    const name = e.nativeEvent.text;
    this.setState({
      name,
      hasName: true
    });
  }

  render() {
    // (6)
    return <View>
        <Text>dsfgdsjnsdfg</Text>
        
        <Login onSubmitName={this.handleSubmitName} /> 
    </View>
  }
}
