import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  root: {
    width: GlobalWidth(8),
    height: GlobalHeight(8),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftWidth: GlobalWidth(4),
    borderRightWidth: GlobalWidth(4),
    borderTopWidth: GlobalHeight(8), 
  },
});
