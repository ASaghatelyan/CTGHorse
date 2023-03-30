import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  itemsView: {
    flexGrow: 1,
  },
  noHorseView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%', 
  },
  noHorse: {
    width: GlobalWidth(61),
    height: GlobalHeight(57),
  },
  listText:{
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
  },
});
