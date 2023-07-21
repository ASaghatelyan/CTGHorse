import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content: {
    padding: GlobalWidth(20),
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.40)',
    borderRadius: 22,
    alignItems: 'center',
  },
  img: {
    width: GlobalWidth(155),
    height: GlobalWidth(155),
    resizeMode: 'contain',
    borderRadius: 22,
    marginBottom: GlobalHeight(32),
  },
  onOffView: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent:'flex-start'
  },
  done: {
    width: GlobalWidth(20),
    height: GlobalWidth(20),
    resizeMode: 'contain',
    marginRight: GlobalHeight(12),
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
  },
  subTitle: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom: GlobalHeight(32),
  },
  price: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    color: '#E9A13A',
    marginBottom: GlobalHeight(25),
  },
});
