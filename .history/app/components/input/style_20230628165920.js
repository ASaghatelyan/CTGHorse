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
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
  },
  styleInput: {
    // backgroundColor: 'rgba(219, 192, 147, 0.3)',
    borderRadius: 8,
    paddingVertical: GlobalHeight(14),
    paddingLeft: GlobalWidth(10),
    paddingRight: GlobalWidth(30),
    color: '#272727',
    fontSize: GlobalWidth(14),
    fontFamily: 'SFProText-Regular',
    borderWidth: 1,
    borderColor: 'transparent',
    flex:1
  },
  selectedInput: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#8482D9',
  },
  inputBtnView:{
    backgroundColor:'red',
    alignItems:'center',justifyContent:'center',
  },
  btnShowhide: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    tintColor: '#A6A6A6',
    resizeMode:'contain',
  },
  errView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: GlobalHeight(4),
    height: GlobalHeight(15),
  },
  errIcon: {
    width: GlobalWidth(12),
    height: GlobalHeight(12),
    marginRight: GlobalWidth(5),
  },
  errText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    // lineHeight: GlobalHeight(15),
    color: '#FF453A',
  },
  err: {
    height: GlobalHeight(15),
    marginBottom: GlobalHeight(4),
  },
});
