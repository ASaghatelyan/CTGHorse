import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  itemView: {
    paddingTop: GlobalHeight(16),
    paddingBottom: GlobalHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: '#190C04',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    width: GlobalWidth(246),
  },
  notiCount: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(18),
    color: '#190C04',
  },
  notiActive: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(18),
    color: '#E9A13A',
  },
  isReadView: {
    width: GlobalWidth(8),
    height: GlobalHeight(8),
    resizeMode: 'contain',
    borderRadius: 100,
    backgroundColor: 'rgba(198, 198, 200, 0.2)',
    marginRight: GlobalWidth(16),
  },
  dots: {
    width: GlobalWidth(14),
    height: GlobalHeight(10),
    resizeMode:''
  },
});
