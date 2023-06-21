import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  generalView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: GlobalHeight(270),
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  dateText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  statusText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(19),
    color: '#4AAD1B',
    textTransform:'capitalize'
  },
  
});
