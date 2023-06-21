import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content:{
    flex:1
  },
  generalView: {flexGrow: 1,paddingBottom:(30)},
  notiText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(24),
    color: 'rgba(25, 12, 4, 0.64)',
  },
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
  title: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(24),
    color: '#190C04',
    marginTop: GlobalHeight(24),
  },
});
