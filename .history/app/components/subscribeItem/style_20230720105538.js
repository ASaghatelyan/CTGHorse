import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  img: {
    width: GlobalWidth(22),
    height: GlobalHeight(22),
    resizeMode: 'contain',
    tintColor: 'rgba(25, 12, 4, 0.64)',
  },
});
