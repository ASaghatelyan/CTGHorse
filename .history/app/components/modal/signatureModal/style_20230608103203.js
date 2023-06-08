import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    flexDirection: 'row',
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(27),
    color: '#E9A13A',
    marginBottom:GH(22)
  },
});
