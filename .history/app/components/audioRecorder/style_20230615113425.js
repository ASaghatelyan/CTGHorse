import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    timeView:{
        flexDirection:'row',
        alignItems:'center',
    },
  lText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    color: '#190C04',
  },
  rText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    textAlign:'right'
  },
});
