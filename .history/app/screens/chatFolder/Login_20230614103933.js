import React from 'react';
import {StyleSheet, Text, TextInput, KeyboardAvoidingView} from 'react-native';

export default class Login extends React.Component {
 
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text>Enter the name to connect as:</Text>
        <TextInput
          autoCapitalize="none"  
          autoCorrect={false}
          autoFocus
          keyboardType="default"
          maxLength={20}
          placeholder="Username"
          returnKeyType="done"
          enablesReturnKeyAutomatically
          style={styles.username}
          onSubmitEditing={this.props.onSubmitName}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
 
  container: {
     marginTop:52,
    backgroundColor:'red',
    height:1222
  },
  username: {
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
