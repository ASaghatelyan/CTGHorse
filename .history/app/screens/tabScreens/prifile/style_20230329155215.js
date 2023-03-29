import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  itemContainer: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: GlobalHeight(270),
    marginTop: GlobalHeight(25),
  },
  titleView: {
    marginTop: GlobalHeight(22),
    marginBottom: GlobalHeight(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  singUpText: {
    flexDirection: 'row',
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(22),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
    marginBottom: GlobalHeight(6), 
    textAlign: 'center',
  },
  filterCount: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
  },
  bottomBtnView: {
    backgroundColor: '#E9A13A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: GlobalWidth(10),
    paddingVertical: GlobalHeight(13),
    borderRadius: 8,
    position: 'absolute',
    right: GlobalWidth(20),
    bottom: 260,
  },
  goToTopText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFEBCF',
    marginLeft: GlobalWidth(10),
  },
  expend: {
    width: GlobalWidth(23),
    height: GlobalHeight(14),
    tintColor: '#FFEBCF',
  },
  filterView: {
    backgroundColor: '#E9A13A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: GlobalWidth(10),
    paddingVertical: GlobalHeight(7.5),
    borderRadius: 22,
  },
  filterText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFEBCF',
    marginRight: GlobalWidth(12.5),
  },
  filterIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(19),
    tintColor: '#FFEBCF',
  },
});
