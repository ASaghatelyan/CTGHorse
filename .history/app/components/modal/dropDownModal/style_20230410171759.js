import { GlobalHeight } from 'app/constant/styleConstants';
import {StyleSheet, Dimensions} from 'react-native';

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
  linearGradient: {
    backgroundColor: '#fff',
    borderRadius: 20, 
  },
  scroll_view: {
    // marginTop: 93,
    // position: "relative",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:GlobalHeight(30)
  },
  count_view: {
    height: 73,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count_people: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 16,
    fontFamily: "SFProText-Regular",
    alignSelf: 'center',
  },
  right: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    position: 'absolute',
    left: (width - 180) / 2,
  },
  left: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    position: 'absolute',
    left: width / 1.8,
  },
  btn_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 16,
  },
  selectItem: {
    height: 48,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectItemText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 20,
    lineHeight: 22,
  },
});
