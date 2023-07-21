import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content: {
    padding: GlobalWidth(20),
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.40)',
    
  },
  img: {
    width: GlobalWidth(155),
    height: GlobalWidth(155),
    resizeMode: 'contain',
  },
});
