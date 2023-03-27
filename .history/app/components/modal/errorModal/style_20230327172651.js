import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A0C04',
    margin: 0,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oo: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    textAlign: 'center', 
  },
  icon: {
    width: GlobalWidth(50),
    height: GlobalHeight(50),
    resizeMode: 'contain',
    marginBottom: GlobalHeight(16),
  },
});
