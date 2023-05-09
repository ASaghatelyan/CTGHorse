import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  modalView: {margin: 0},
  content: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    paddingVertical: GlobalHeight(22),
    paddingHorizontal: GlobalWidth(15),
    borderRadius: 20,
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
    marginBottom: GlobalHeight(24),
  },
  leftText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(22),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  
  
  closeView: {
    position: 'absolute',
    right: GlobalWidth(10),
    top: GlobalHeight(5),
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1111,
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
  totlaPayment: {
    width: '100%',
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: GlobalHeight(20),
    paddingHorizontal: GlobalWidth(16),
  },
});
