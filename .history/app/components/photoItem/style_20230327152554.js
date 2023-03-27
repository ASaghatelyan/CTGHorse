import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
  
  },
  itemsSmall:{
    width: GlobalWidth(76),
    height: GlobalHeight(70),
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: GlobalWidth(8),
    borderRadius: 10, 
  }
  
});
