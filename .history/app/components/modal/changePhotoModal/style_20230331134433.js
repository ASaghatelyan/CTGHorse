import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 0,
    borderRadius: 8,
    paddingTop: GlobalHeight(19),
    paddingBottom: GlobalHeight(33),
    alignItems: 'center',
    justifyContent: 'center',
  },
   
});