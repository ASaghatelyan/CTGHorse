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
  topView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: GlobalWidth(230),
    marginBottom:GlobalHeight(15)
  },
  contView: {
    alignItems: 'center',
    justifyContent: 'center',
    // maxWidth: GlobalWidth(240),
    paddingHorizontal: GlobalWidth(9),
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
    textAlign: 'center',
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
    minWidth: GlobalWidth(150),
    alignItems: 'center',
    borderRadius: 8,
    borderWidth:1,
    color:'red'
  },
  btnText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    paddingVertical: GlobalHeight(15),
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
  btnsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnOk: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderBtnView: {
    borderWidth: 1,
    borderColor: '#190C04',
    minWidth: GlobalWidth(150),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: GlobalWidth(8),
  },
  borderBtnText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    paddingVertical: GlobalHeight(15),
  },
});
