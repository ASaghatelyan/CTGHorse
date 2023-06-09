import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    root: {
        alignItems: 'center', 
        backgroundColor: 'transparent',
        borderRadius: 4,
        width:GlobalWidth(72)
      },
      text: {
        fontSize: GlobalWidth(14), 
        fontFamily:'Roboto-Regular', 
        lineHeight:GlobalHeight(20),
        color:'#FFFFFF'
      },
});
