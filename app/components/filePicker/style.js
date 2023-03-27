import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      box: {
        width: 60,
        height: 60,
        marginVertical: 20,
      },
});
