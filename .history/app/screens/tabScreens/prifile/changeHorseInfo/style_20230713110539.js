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
    // lineHeight: GlobalHeight(21),
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
    // lineHeight: GlobalHeight(17),
    color: '#FFF',
  },
  topimg: {
    flex: 1,
    height: GlobalHeight(155),
    justifyContent: 'flex-end',
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
    backgroundColor: '#fff',
  },
  topImgView: {
    flexGrow: 1,
    paddingBottom: GlobalHeight(20),
    marginTop: GlobalHeight(15),
  },
  // horseImgView: {
  //   marginRight: GlobalWidth(8),
  // },
  delIc: {
    position: 'absolute',
    top: GlobalHeight(14),
    left: GlobalWidth(14),
  },
  horseIc: {
    width: GlobalWidth(48),
    height: GlobalWidth(48),
    marginHorizontal: GlobalWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  horseImgView: {
    marginRight: GlobalWidth(8),
  },
  video: {
    width: GlobalWidth(48),
    height: GlobalWidth(48),
    borderRadius: 8,
  },
  rbin: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
    resizeMode: 'contain',
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
    // lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    marginTop: GlobalHeight(10),
  },
  camera: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
    tintColor: 'rgba(25, 12, 4, 0.64)',
    resizeMode: 'contain',
  },
  noDataView: {
    width: '100%',
    borderColor: '#DBC093',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: GlobalWidth(16),
    paddingVertical: GlobalHeight(16),
    marginBottom: GlobalHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  noData: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: '#190C04',
  },
  itemTitle: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: '#190C04',
    width: GlobalWidth(154),
    marginBottom: GlobalHeight(8),
  },
  itemInfo: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    width: GlobalWidth(194),
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
    // lineHeight: GlobalHeight(21),
    color: '#190C04',
    textDecorationLine: 'underline',
  },
  deleteView: {
    marginTop: GlobalHeight(60),
    marginBottom: GlobalHeight(30),
  },
  delView: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(25, 12, 4, 0.64)',
    paddingVertical: GlobalHeight(11),
  },
  deleteText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    // lineHeight: GlobalHeight(22),
    color: '#E93A3A',
  },
  infoText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(22),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  addBtn: {
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
  },
  updView: {
    borderRadius: 8,
    backgroundColor: '#190C04',
    paddingVertical: GlobalHeight(15),
    paddingHorizontal: GlobalWidth(49),
    marginBottom: GlobalHeight(22),
    marginTop: GlobalHeight(2),
  },
  updText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  gView: {
    width: '100%',
    marginBottom: GlobalHeight(16),
  },
  titleText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
  },
  input: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: '#190C04',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    width: '100%',
    paddingVertical: GlobalHeight(14),
    paddingHorizontal: GlobalWidth(16),
    borderRadius: 8,
    shadowColor: 'rgba(233, 161, 58,0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.76,
    shadowRadius: 1.68,
    minHeight: 50,
  },
  inputOptional: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: '#190C04',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    width: '100%',
    paddingVertical: GlobalHeight(12),
    paddingHorizontal: GlobalWidth(16),
    borderRadius: 8,
    shadowColor: 'rgba(233, 161, 58,0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.76,
    shadowRadius: 1.68,
    height: 120,
  },
  numText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(10),
    // lineHeight: GlobalHeight(14),
    color: '#190C04',
    textAlign: 'right',
    marginRight: GlobalWidth(3),
  },
  modal: {
    margin: 0,
    backgroundColor: '#000',
    paddingTop: 20,
    position:'relative'
  },
  modaleClose: {
    position: 'absolute',
    bottom: GlobalHeight(60),
    right: GlobalWidth(20),
  },
});
