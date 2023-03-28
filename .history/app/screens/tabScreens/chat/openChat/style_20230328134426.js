import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  }, 
  topView:{
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:GlobalWidth(15)
  },
  backBtnView:{
    width:GlobalWidth(20),
    height:GlobalHeight(24),
    alignItems:'center',
    justifyContent:'center',backgroundColor:'red',
    marginRight:(9)
  },
  backBtn:{ 
    width:GlobalWidth(12),
    height:GlobalHeight(20),
    resizeMode:'contain'
  }
});
