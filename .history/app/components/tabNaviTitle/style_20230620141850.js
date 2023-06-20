import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: GlobalHeight(10),
  
  },
  text: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(22),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
  },
});
