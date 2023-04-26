import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  itemsView: {
    marginTop: GlobalHeight(38),
    marginBottom: GlobalHeight(162),
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: GlobalHeight(11),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(25, 12, 4, 0.64)',
    paddingHorizontal: GlobalWidth(16),
  },
  rightIc: {
    width: GlobalWidth(8),
    height: GlobalHeight(13),
    borderRadius: 22,
  },
  leftBtnText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#E9A13A',
  },
  choosedText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
    maxWidth: GlobalWidth(95),
  },
  filtered: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#190C04',
    marginRight: GlobalWidth(4),
    paddingLeft: GlobalWidth(4),
    paddingRight: GlobalWidth(8),
    marginBottom: GlobalHeight(40),
  },
  delView: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  del: {
    width: GlobalWidth(18),
    height: GlobalHeight(18),
    resizeMode: 'contain',
  },
  bottomView:{
    paddingHorizontal:GlobalWidth(15)
  },
});
