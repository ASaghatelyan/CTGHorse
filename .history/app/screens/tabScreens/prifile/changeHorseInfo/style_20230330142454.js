import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  generalView: {
    flexGrow: 1,  
    // paddingBottom: GlobalHeight(250),
    paddingHorizontal: GlobalWidth(15),
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  titleText:{
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom:GlobalHeight(18)
  },
  chooseBtn:{
    backgroundColor:'rgba(25, 12, 4, 0.64)'
  },
  topimg:{
    flex:1,
    height:GlobalHeight(155),
    
  },
});
