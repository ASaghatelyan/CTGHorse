import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: 0,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    textAlign:'center', marginBottom:(10)
  },
  image:{
    width:'100%',
    height:GlobalHeight(370),
    marginBottom:GlobalHeight(18),
    resizeMode:'contain'
  },
});
