import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gView: {
    justifyContent: 'space-between',
    // flex: 1,
    height: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  infoView: {
    flexDirection: 'row',
  },
  gFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: GlobalWidth(33),
  },
  forSaleView: {
    width: '100%',
    marginBottom: GlobalHeight(16),
  },
  title: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    color: 'rgba(255, 235, 207, 1)',
    marginBottom: GlobalHeight(10),
  },
  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  ava: {
    width: GlobalWidth(155),
    height: GlobalHeight(155),
    borderRadius: 22,
    marginBottom: GlobalHeight(32),
  },
  err: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#FF2D55',
  },
  pic: {
    width: GlobalWidth(24),
    height: GlobalWidth(24),
    resizeMode: 'contain',
    marginRight: GlobalWidth(7),
  },
  totalView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText:{
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  priceText:{
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(18),
    // lineHeight: GlobalHeight(17),
    color: 'rgba(233, 161, 58, 1)',
  },
});
