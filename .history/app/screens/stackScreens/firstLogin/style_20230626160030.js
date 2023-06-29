import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: GlobalWidth(15), 
  },
  mainView:{
    paddingBottom:GlobalHeight(150)
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(41),
    color: '#FFEBCF',
    textAlign: 'center',
    // marginBottom: GlobalHeight(8),
  },
  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFEBCF',
    textAlign: 'center',
    marginBottom: GlobalHeight(64),
  }, 
});
