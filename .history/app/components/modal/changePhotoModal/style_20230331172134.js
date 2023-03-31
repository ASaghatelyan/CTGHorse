import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  titleView: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
  },
  topimg: {
    width: '100%',
    height: GlobalHeight(155),
    justifyContent: 'flex-end',
    marginBottom: GlobalHeight(25),
    marginTop: GlobalHeight(32),
  },
   
});
