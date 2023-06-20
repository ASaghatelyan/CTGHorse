import React from 'react';
import Login from './Login';
import { View } from 'react-native';

export default class MyApp extends React.Component {
  // (1)
  constructor(props) {
    super(props); // (2)
    this.handleSubmitName = this.onSubmitName.bind(this); // (3)
    this.state = {
      // (4)
      hasName: false,
    };
  }

  onSubmitName(e) {
    // (5)
    const name = e.nativeEvent.text;
    this.setState({
      name,
      hasName: true,
    });
  }

  render() {
    // (6)
    return <View>
        <Login onSubmitName={this.handleSubmitName} /> 
    </View>
  }
}