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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});
