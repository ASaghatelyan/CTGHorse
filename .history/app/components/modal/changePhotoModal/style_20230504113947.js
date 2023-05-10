import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  modalViwe
  container: {
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeView: {
    position: 'absolute',
    right: GlobalWidth(17),
    top: GlobalHeight(8),
  },
  closeIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
  },
  titleView: {
    width: '100%',
    alignItems: 'center',
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
    justifyContent: 'flex-end',
    marginBottom: GlobalHeight(25),
    marginTop: GlobalHeight(32),
  
  },
  topImgView: {
    paddingBottom: GlobalHeight(20),
    marginTop: GlobalHeight(15),
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
  img: {
    width: GlobalWidth(164),
    height: GlobalHeight(164), 
    aspectRatio: 1,
    resizeMode:'contain'
  },
  pic: {
    width: GlobalWidth(16),
    height: GlobalHeight(16),
    position: 'absolute',
    right: GlobalWidth(8),
    bottom: GlobalHeight(22),
    resizeMode: 'contain',
  },
  addBtn: {
    width: '100%',
    // paddingHorizontal: 15, 
    flex:1,
    justifyContent:'flex-end',
    marginBottom:30
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
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
});