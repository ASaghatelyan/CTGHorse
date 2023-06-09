import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const THUMB_RADIUS_LOW = GlobalWidth(11);
const THUMB_RADIUS_HIGH = GlobalWidth(11);

export const styles = StyleSheet.create({
    rootLow: {
        width: THUMB_RADIUS_LOW * 2,
        height: THUMB_RADIUS_LOW * 2,
        borderRadius: THUMB_RADIUS_LOW, 
        backgroundColor: '#067EEE',
        resizeMode:'contain'
      },
      rootHigh: {
        width: THUMB_RADIUS_HIGH * 1.5,
        height: THUMB_RADIUS_HIGH * 1.5,
        borderRadius: THUMB_RADIUS_HIGH, 
        backgroundColor: '#067EEE',
        resizeMode:'contain'
      },
});
