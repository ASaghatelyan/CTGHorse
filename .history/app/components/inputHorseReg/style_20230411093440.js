import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from '../../constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  reqFields:{
    color:'red',
    fontSize:12
  },
  title: {
      fontFamily: 'SFProText-Regular',
      fontSize: GlobalWidth(16),
      lineHeight: GlobalHeight(19),
      color: '#FFEBCF',
      marginBottom:GlobalHeight(8)
  },
  styleInput: {
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    borderRadius: 8,
    paddingVertical: GlobalHeight(14),
    paddingLeft: GlobalWidth(10),
    paddingRight: GlobalWidth(30),
    color: '#FFEBCF',
    fontSize: GlobalWidth(14),
    fontFamily: 'SFProText-Regular', 
  },
  selectedInput: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#8482D9',
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
