import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#',
  justifyContent:'center',
  alignItems:'center'  },
  logo: {
    // width: GlobalWidth(343),
    // height: GlobalHeight(267),
    resizeMode: 'contain',
    marginBottom: GlobalHeight(160), 
  },
});
