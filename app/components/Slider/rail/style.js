import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

 
 
export const styles = StyleSheet.create({
    root: {
        flex: 1,
        height: GlobalHeight(2),
        borderRadius: 2,
        backgroundColor: '#B9DBFE',
      },
});
