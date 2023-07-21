import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    
  img: {
    width: GlobalWidth(155),
    height: GlobalWidth(155),
    resizeMode: 'contain',
  },
});
