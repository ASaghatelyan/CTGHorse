import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  textView: {width: GlobalWidth(246)},
  notiCount: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(18),
    color: '#190C04',
  },
  notiActive: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(18),
    color: '#E9A13A',
  },
  isReadView: {
    width: GlobalWidth(8),
    height: GlobalHeight(8),
    resizeMode: 'contain',
    borderRadius: 100,
    backgroundColor: 'rgba(198, 198, 200, 0.2)',
  },
});
