import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalLineHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: '100%',
    justifyContent: 'flex-end',
    paddingHorizontal: GlobalWidth(15),
  },
  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalLineHeight(16),
    color: '#FFEBCF',
    textAlign:'center',
    marginBottom:GlobalHeight(32)
  },
  image:{
    width:'100%',
    height:GlobalHeight(370),
    marginBottom:GlobalHeight(18),
    resizeMode:'contain'
  },
});
