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
    bottom: 1,
    right: 2,
    width: GlobalWidth(19),
    height: GlobalHeight(19),
  },
  addPicVid: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: GlobalHeight(14),
    marginBottom: GlobalHeight(32),
  },
  addView: {
    borderColor: '#E9A13A',
    borderWidth: 1,
    paddingVertical: GlobalHeight(14),
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: GlobalWidth(8),
    paddingHorizontal: GlobalWidth(10),
    borderStyle: 'dotted',
  },
  addText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    marginTop: GlobalHeight(10),
  },
  camera: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
    tintColor: 'rgba(25, 12, 4, 0.64)',
  },
  uplFileView: {
    width: '100%',
    backgroundColor: '#DBC093',
    borderRadius: 8,
    paddingHorizontal: GlobalWidth(16),
    paddingVertical: GlobalHeight(16),
    marginBottom: GlobalHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  uplFileIc: {
    width: GlobalWidth(51),
    height: GlobalWidth(51),
    marginRight: GlobalWidth(16),
  },
  uplDone: {
    width: GlobalWidth(30),
    height: GlobalWidth(30),
    marginLeft: GlobalWidth(16),
  },
  itemTitle: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#190C04',
    width: GlobalWidth(154),
    marginBottom: GlobalHeight(8),
  },
  itemInfo: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    width: GlobalWidth(164),
  },
  deleteItemView: {
    width: GlobalWidth(24),
    height: GlobalWidth(24),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: GlobalHeight(8),
    right: GlobalWidth(9),
  },
  deleteItem: {
    width: GlobalWidth(20),
    height: GlobalWidth(20),
    tintColor: '#333333',
  },
  uploadView: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: GlobalHeight(8),
    marginBottom: GlobalHeight(32),
  },
  uploadText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
    textDecorationLine: 'underline',
  },
  deleteView: {
    marginTop: GlobalHeight(76),
    marginBottom:GlobalHeight(80)
  },
  delView: {
    borderBottomWidth: 1,
    borderBottomColor:'rgba(25, 12, 4, 0.64)',
    paddingVertical:GlobalHeight(11)
  },
  deleteText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#E93A3A',
  },
  infoText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(22),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  addBtn: {
    // position: 'absolute',
    // bottom: GlobalHeight(0),
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor:'red', 
  },
  updView: {
    borderRadius: 8,
    backgroundColor: '#190C04',
    paddingVertical: GlobalHeight(15),
    paddingHorizontal: GlobalWidth(49),
    marginBottom: 32,
  },
  updText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
});