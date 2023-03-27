import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  calcelText: {
    flexDirection: 'row',
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  topView:{
    flexDirection:'row',
    alignItems:'center',
 justifyContent:'space-between'
  },
  searchInput: {
    width:GlobalWidth(263),
    backgroundColor:'#FFF',
    height:GlobalHeight(45),
    borderRadius:22
  },
  searchIc
});
