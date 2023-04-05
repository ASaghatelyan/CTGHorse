import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: { 
    justifyContent: 'center',
    alignItems:'center', 
  },
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  avaView:{
    marginBottom:GlobalHeight(32),
    alignItems:'center',
  },
  ava: {
    width: GlobalWidth(155),
    height: GlobalHeight(155),
    borderRadius: 22, 
  },
  avaText:{
    marginTop:GlobalHeight(8),
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFF', 
  },
  titleText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFEBCF',
    marginBottom: GlobalHeight(8),
  },
});
