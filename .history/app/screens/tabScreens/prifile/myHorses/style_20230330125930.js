import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  itemsView: {
    flexGrow: 1,
  },
  noHorseView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', 
  },
  noHorse: {
    width: GlobalWidth(61),
    height: GlobalHeight(57),
  },
  listText:{
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
    marginVertical:GlobalHeight(16)
  },
  detileText:{
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#E9A13A', 
  },
  addView:{
    borderRadius:8,
    backgroundColor:'#190C04',
    paddingVertical:GlobalHeight(15),
    paddingHorizontal:GlobalWidth(49)
  },
  addText:{
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
});
