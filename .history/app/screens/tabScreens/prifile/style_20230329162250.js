import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  userView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: GlobalWidth(15),
  },
  nameView: {
    justifyContent: 'space-between',
    marginLeft: GlobalWidth(16),
  },
  userPersView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoView: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(22),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
    marginBottom: GlobalHeight(22),
    textAlign: 'center',
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  userImg: {
    width: GlobalWidth(89),
    height: GlobalHeight(89),
    borderColor: '#FFEBCF',
    borderWidth: 2,
    borderRadius: 100,
  },
  ic: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    marginRight: GlobalWidth(8),
  },
  infoText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    width: GlobalWidth(150),
  },
  editIc: {
    width: GlobalWidth(18),
    height: GlobalHeight(18),
    marginRight: GlobalWidth(6),
  },
  editView: {
    flexDirection: 'row',
  },
  editText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#E9A13A',
  },
  rateInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateView: {
    paddingVertical: GlobalHeight(4),
    paddingHorizontal: GlobalWidth(17),
    borderWidth: 1,
    borderColor: 'rgba(25, 12, 4, 0.3)',
    minHeight: GlobalHeight(48),
    borderRadius: 8,
    marginRight:(16)
  },
  rateText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
  },
});
