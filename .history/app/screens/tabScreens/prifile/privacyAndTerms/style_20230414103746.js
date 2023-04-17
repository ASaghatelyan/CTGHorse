import {StyleSheet, Dimensions} from 'react-native';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: {
    flex: 1,
    width: width,
    height: Dimensions.get('window').height,
  },
});
