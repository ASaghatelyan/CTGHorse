import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: GlobalHeight(35),
    marginTop: GlobalHeight(12),width:'100%'
  },
  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(20),
    color: '#C2C2C2',
  },
  priceText: {
    fontFamily: 'Roboto-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(20),
    color: '#FFF',
  },
  countView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  count: {
    fontFamily: 'Roboto-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(20),
    color: '#979797',
    paddingHorizontal: GlobalWidth(10),
  },
});
