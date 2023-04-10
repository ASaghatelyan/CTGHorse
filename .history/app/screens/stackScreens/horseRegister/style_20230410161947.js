import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // height: '100%', 
   },
  mainView:{ 
    flexGrow:1,
    paddingHorizontal: GlobalWidth(15),
    backgroundColor:'blue'

  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(41),
    color: '#FFEBCF', 
    marginBottom: GlobalHeight(8),
  },
  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFEBCF', 
  }, 
  bottomBtn:{
    backgroundColor:'rgba(0,0,0,0.9)',
    paddingTop:6,paddingBottom:25,
    borderRadius:8
  },
});
