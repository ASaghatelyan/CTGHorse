import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  }, 
  input: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    backgroundColor: '#EEEEEE',
    marginHorizontal: GlobalWidth(15),
    borderRadius: 22,
    paddingVertical: GlobalHeight(14),
    marginVertical: GlobalHeight(16),
    paddingHorizontal: GlobalWidth(14),
  },
});
