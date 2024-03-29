import { GlobalHeight, GlobalWidth } from 'app/constant/styleConstants';
import {StyleSheet, Dimensions, Platform} from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const widthFigma = 375;
const heightFigma = 812;

const globalWidth = a => {
  return (width * a) / widthFigma;
};
const globalHeight = a => {
  return (height * a) / heightFigma;
};

export const styles = StyleSheet.create({
    calendarTitle: {
 flexDirection:'row',
 alignItems:'center',
  },
  topBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: globalWidth(20),
  }, 
  titleText: {
    color: '#FFF',
    fontSize: globalWidth(16),
    lineHeight: globalHeight(24),
    fontFamily: 'SFProText-Medium',
    marginLeft: globalHeight(2), 
  },
  arrowIc:{
    width:GlobalWidth(15),
    height:GlobalHeight(15),
    resizeMode:'contain',
    tintColor:'#FFFFFF'
  },
});
