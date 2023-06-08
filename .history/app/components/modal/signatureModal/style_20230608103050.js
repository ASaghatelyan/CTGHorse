import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  titlew: {
    
  },
});
