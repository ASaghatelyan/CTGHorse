import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';
import {GHeader} from 'app/components/gHeader';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content: {
    height: '100%',
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(22),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  dateText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(19),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  statusText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(19),
    color: '#4AAD1B',
    textTransform: 'capitalize',
  },
  cycleView: {
    width: GlobalWidth(8),
    height: GlobalHeight(8),
    resizeMode: 'contain',
    borderRadius: 100,
    backgroundColor: '#4AAD1B',
    marginRight: 16,
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemView: {
    flexGrow: 1,
    paddingHorizontal: GlobalWidth(16),
    paddingBottom:GlobalHeight(30)
  },
  showIcView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: GlobalWidth(24),
    height: GlobalHeight(24),
  },
  showIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
    resizeMode: 'contain',
  },
});
