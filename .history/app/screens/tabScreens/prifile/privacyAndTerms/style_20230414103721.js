import {StyleSheet, Dimensions, View, Text, SafeAreaView} from 'react-native';
const  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center', 
    },
    pdf: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  