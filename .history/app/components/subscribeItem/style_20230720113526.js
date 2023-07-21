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
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    // lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom: GlobalHeight(8), 
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    // lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom: GlobalHeight(8), 
  },
});
