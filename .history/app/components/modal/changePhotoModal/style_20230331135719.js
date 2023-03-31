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
  closeView:{
    position:'absolute',
    right:GlobalWidth(8),
    top:GlobalHeight(8)
  },
  closeIc:{
    width:GlobalWidth(20),
    height:GlobalHeight(20)
  },
  title:{
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04', 
  },
  topimg: {
    flex: 1,
    height: GlobalHeight(155),
    justifyContent: 'flex-end',
  },
  topImgView: {
    flexGrow: 1,
    paddingBottom: GlobalHeight(20),
    marginTop: GlobalHeight(15),
  },
});
