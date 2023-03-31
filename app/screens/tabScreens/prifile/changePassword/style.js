import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  scroll:{
    flexGrow: 1,
    paddingHorizontal: 15,
    marginTop: 16,
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#190C04',
  },
  gFlex: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitleText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom: GlobalHeight(82),
  },
  codeSubTitleText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom: GlobalHeight(32),
  },
  btnView: {
    marginTop: GlobalHeight(64),
  },
  codeIc: {
    width: GlobalWidth(95),
    height: GlobalHeight(95),
    marginVertical: 26,
  },
  showPassBtnAndroid: {
    position: 'absolute',
    top: GlobalHeight(14),
    right: GlobalHeight(22),
  },
  showPassBtnIOS: {
    position: 'absolute',
    top: GlobalHeight(37),
    right: GlobalHeight(12),
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: GlobalHeight(15),
  },
  backView: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: GlobalWidth(8),
    height: GlobalHeight(15),
    resizeMode: 'contain',
    tintColor: '#190C04',
  },
  updViwe: {
    flexGrow: 1,
    backgroundColor: '#1A0C04',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: GlobalWidth(15),
  },
  updText: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(41),
    color: '#FFEBCF',
  },
  done: {
    marginVertical: GlobalHeight(16),
    width: GlobalWidth(102),
    height: GlobalWidth(102),
    borderRadius: 100,
  },
  doneText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: ' rgba(255, 255, 255, 0.64)',
    marginBottom: GlobalHeight(62),
  },
  singUpView: {
    flexDirection: 'row',
    marginBottom: GlobalHeight(32),
    justifyContent: 'center',
  },
  haveAccount: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    marginRight: GlobalWidth(8),
  },
  singUpText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  codeInput: {
    borderRadius: 8,
    marginRight: 8,
    width: GlobalWidth(78),
    height: GlobalHeight(48),
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#190C04',
  },
  errView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: GlobalHeight(32),
    paddingHorizontal: GlobalHeight(16),
  },
  errText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FF453A',
  },
  errIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
    marginRight: GlobalWidth(5),
  },
});
