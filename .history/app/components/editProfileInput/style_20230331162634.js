import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from '../../constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(15),
    color: '#666666',
    marginBottom: GlobalHeight(8),
  },
  styleInput: {
    paddingVertical: GlobalHeight(11),
    color: '#190C04',
    fontSize: GlobalWidth(17),
    lineHeight:
    fontFamily: 'SFProText-Regular',
    borderBottomColor: 'rgba(25, 12, 4, 0.64)',
    borderBottomWidth: 0.5,
    marginBottom: 8,
  },
  selectedInput: {
    // backgroundColor: 'transparent',
    // borderWidth: 1,
    // borderColor: '#8482D9',
  },
  btnShowhide: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    tintColor: '#A6A6A6',
  },
  errView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 4,
  },
  errIcon: {
    width: GlobalWidth(10),
    height: GlobalHeight(10),
    marginRight: GlobalWidth(9),
  },
  errText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(10),
    lineHeight: GlobalHeight(15),
    color: '#C60000',
  },
  err: {
    height: GlobalHeight(15),
    marginBottom: GlobalHeight(4),
  },
});
