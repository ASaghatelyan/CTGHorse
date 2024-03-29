import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A0C04',
    margin: 0,
    height: height, 
    justifyContent: 'center',
  },
  oops: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(41),
    color: '#FFEBCF',
    textAlign: 'center', 
    marginVertical:GlobalHeight(16)
  },
  wrongText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    textAlign: 'center', 
  },
  icon: {
    width: GlobalWidth(50),
    height: GlobalHeight(50),
    resizeMode: 'contain', 
  },
});
