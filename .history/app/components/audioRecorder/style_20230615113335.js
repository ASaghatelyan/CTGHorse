import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    lText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12), 
    color: '#FFEBCF',
  },
    rText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  
});
