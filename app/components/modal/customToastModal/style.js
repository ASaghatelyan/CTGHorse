import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-start',
    marginHorizontal: GlobalWidth(16),
    marginVertical: GlobalHeight(8),
  },
  gView: {
    width: '100%',
    alignItems: 'flex-start',
  },
  error: {
    width: '100%',
    paddingHorizontal: GlobalWidth(24),
    borderRadius: 32,
    backgroundColor: '#FFDDA9',
    paddingVertical: GlobalHeight(12),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  success: {
    width: '100%',
    paddingHorizontal: GlobalWidth(24),
    borderRadius: 32,
    backgroundColor: '#C6E7C1',
    paddingVertical: GlobalHeight(12),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Roboto-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(18),
    color: '#171717',
  },
  itemText: {
    fontFamily: 'Roboto-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(24),
    color: '#171717',
  },
  norev: {
    marginRight: GlobalWidth(5),
    width: GlobalWidth(14),
    height: GlobalHeight(12),
    resizeMode: 'contain',
  },
  doneRev: {
    marginRight: GlobalWidth(5),
    width: GlobalWidth(14),
    height: GlobalHeight(14),
    resizeMode: 'contain',
  },
});