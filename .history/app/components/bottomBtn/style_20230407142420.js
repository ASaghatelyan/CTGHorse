import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from '../../constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
 justifyContent:'space-between',
    paddingBottom:GlobalHeight(42),
 backgroundColor:'red',
 position:'absolute',
  },
  btnViewL: {
    width: '47%',
    alignItems: 'center',
    borderWidth:1,
    borderColor: '#E9A13A',
    paddingVertical: GlobalHeight(14),
    borderRadius: 14,
  },
  btnNameL: {
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#E9A13A',
    fontFamily: 'SFProText-SemiBold',
  },
  btnViewR: {
    width: '47%',
    alignItems: 'center',
    backgroundColor: '#E9A13A',
    paddingVertical: GlobalHeight(14),
    borderRadius: 14,
  },
  btnNameR: {
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFF',
    fontFamily: 'SFProText-SemiBold',
  },
});
