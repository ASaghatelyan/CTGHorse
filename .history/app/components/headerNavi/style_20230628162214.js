import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gFlex: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal:GlobalWidth(16), 
    marginBottom:GlobalHeight(17)
  },
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    width: GlobalWidth(12),
    height: GlobalHeight(20),
    marginRight: GlobalWidth(5),
  },
  ava: {
    width: GlobalWidth(155),
    height: GlobalHeight(155),
    borderRadius: 22,
  },
  leftBtnText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    // lineHeight: GlobalHeight(22),
    color: '#E9A13A',
  },
  
});
