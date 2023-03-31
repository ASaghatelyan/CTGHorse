import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: GlobalHeight(19),
    paddingBottom: GlobalHeight(33),
  },
  closeView: {
    position: 'absolute',
    right: GlobalWidth(8),
    top: GlobalHeight(8),
  },
  closeIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
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
    // justifyContent: 'flex-end', 
  },
  topImgView: {
    paddingBottom: GlobalHeight(20),
    marginTop: GlobalHeight(15),
  
  },
  chooseBtn: {
    backgroundColor: 'rgba(25, 12, 4, 0.64)',
    paddingVertical: GlobalHeight(10),
 width:122
    
  },
  chooseBtnText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFF',
  },
});
