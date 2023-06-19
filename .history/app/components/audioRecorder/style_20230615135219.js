import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  audioView: {
    backgroundColor: '#F7F7F7',
    paddingVertical: GlobalHeight(15),
    // marginHorizontal:GlobalWidth(16),
    paddingHorizontal:GlobalWidth(4),
    borderRadius:28
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: GlobalWidth(16),
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
    textAlign: 'right',
  },
  icon:{
    width:(30),
    height:30,
    resizeMode:'contain'
  }
});
