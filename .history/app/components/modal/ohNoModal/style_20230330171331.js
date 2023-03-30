import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    margin: 0,
    borderRadius: 8,
    paddingTop: GlobalHeight(19),
    paddingBottom: GlobalHeight(33),
    alignItems: 'center',
    justifyContent: 'center',
  },
  contView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: GlobalWidth(240),
  },
  text: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    textAlign: 'center',
    marginBottom: GlobalHeight(10),
  },
  onNo{}
});
