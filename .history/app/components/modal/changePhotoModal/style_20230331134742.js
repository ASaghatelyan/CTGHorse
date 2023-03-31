import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
   
  closeView:{
    position:'absolute',
    right:GlobalWidth(8),
    top:GlobalHeight(8)
  },
  closeIc:{
    width:GlobalWidth(20),
    height:GlobalHeight(20),
    tintColor:'red'
  },
});
