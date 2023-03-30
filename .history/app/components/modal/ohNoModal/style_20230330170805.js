import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ' rgba(25, 12, 4, 0.7)',
    margin: 0,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    textAlign: 'center',
    marginBottom: GlobalHeight(10),
  },
 
});
