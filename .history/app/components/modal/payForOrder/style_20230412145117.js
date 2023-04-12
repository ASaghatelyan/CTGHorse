import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    paddingBottom: GlobalHeight(40),
    paddingHorizontal: GlobalWidth(15),
    position: 'relative',
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: GlobalWidth(15),
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(22),
    color: '#E9A13A',
    marginBottom: GlobalHeight(8),
    marginTop: GlobalHeight(40),
  },
  subTitle: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(22),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom: GlobalHeight(16),
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(22),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  rightText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(22),
    color: '#E9A13A',
  },
  closeView: {
    position: 'absolute',
    right: GlobalWidth(18),
    top: GlobalHeight(60),
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    width: GlobalWidth(16),
    height: GlobalWidth(16),
  },
  horseIc: {
    width: GlobalWidth(155),
    height: GlobalHeight(155),
    borderRadius: 22,
    marginBottom: GlobalHeight(16),
  },
});
