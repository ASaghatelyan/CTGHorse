import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flexGrow:1,
    paddingHorizontal:GlobalWidth(15)
  },
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  avaView: {
    marginBottom: GlobalHeight(32),
    alignItems: 'center',
  },
  ava: {
    width: GlobalWidth(155),
    height: GlobalHeight(155),
    borderRadius: 22,
  },
  avaText: {
    marginTop: GlobalHeight(8),
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFF',
  },
  gView: {
    width: '100%',
    marginBottom: GlobalHeight(16),
  },
  titleText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFEBCF',
    marginBottom: GlobalHeight(8),
  },
  input: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFEBCF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    width: '100%',
    paddingVertical: GlobalHeight(14),
    paddingHorizontal: GlobalWidth(16),
    borderRadius: 8,
    shadowColor: 'rgba(233, 161, 58,0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.76,
    shadowRadius: 1.68,
    minHeight: 50,
  },
});
