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
  contView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: GlobalWidth(240),
  },
  text: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    textAlign: 'center',
    marginBottom: GlobalHeight(10),
  },
  onNoText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
  },
  titleTetx: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#E9A13A',
    marginVertical: GlobalHeight(16),
    textAlign: 'center',
  },
  infoText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom: GlobalHeight(16),
    textAlign: 'center',
  },
  btnView: {
    backgroundColor: '#190C04',
    minWidth: GlobalWidth(160),
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    paddingVertical: GlobalHeight(15),
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
  btnsView:{
    flexDirection:'row',
  },
  borderBtnView:{},
  borderBtnText:{
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    paddingVertical: GlobalHeight(15),
  }
});
