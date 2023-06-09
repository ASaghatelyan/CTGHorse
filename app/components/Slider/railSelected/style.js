import {StyleSheet, Dimensions} from 'react-native';
 

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  root: {
    height: 2,
    backgroundColor: '#067EEE',
    borderRadius: 2,
  },
});
