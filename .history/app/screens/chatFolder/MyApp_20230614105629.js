import React from 'react';
import Login from './Login';
import { View,Text } from 'react-native';
import ChatClient from './ChatClient';
import Pusher from 'pusher-js/types/src/core/pusher';

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
  Pusher.getInstance(); 

  componentDidMount() {
  
  }
  render() {
    if (this.state.hasName) {
      return (
        <ChatClient name={ this.state.name } />
      );
    } else {
      return (
        <Login onSubmitName={ this.handleSubmitName } />
      );
    }
  }
}
