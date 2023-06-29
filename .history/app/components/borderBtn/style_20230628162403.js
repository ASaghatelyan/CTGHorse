import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from '../../constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  btnView: { 
    alignItems: 'center',
    borderColor: '#E9A13A',
    borderWidth:1,
    paddingVertical: GlobalHeight(14),
    borderRadius: 14,
    marginTop:GlobalHeight(16),
    width:'100%'
  },
  btnName: {
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: '#E9A13A',
    fontFamily: 'SFProText-Regular',
  },
});
