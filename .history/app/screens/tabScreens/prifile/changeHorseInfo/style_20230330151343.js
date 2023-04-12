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
  titleText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom: GlobalHeight(18),
  },
  chooseBtn: {
    backgroundColor: 'rgba(25, 12, 4, 0.64)',
    paddingVertical: GlobalHeight(10),
    alignItems: 'center',
  },
  chooseBtnText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFF',
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
  horseImgView: {
    marginRight: GlobalWidth(8),
  },
  horseIc: {
    width: GlobalWidth(48),
    height: GlobalWidth(48),
    marginHorizontal: GlobalWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rbin: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
  },
  vidType: {
    position: 'absolute',
    bottom: -10,
    right: -6,
    width:(7),
    height:GlobalHeight(7)
  },
});