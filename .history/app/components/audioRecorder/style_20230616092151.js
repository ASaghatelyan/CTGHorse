import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  audioView: {
    backgroundColor: '#F7F7F7',
    paddingBottom: GlobalHeight(8),
    // marginHorizontal:GlobalWidth(16),
    paddingHorizontal: GlobalWidth(4),
    borderRadius: 28,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%', 
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  lText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    color: '#190C04',
    width: '25%',
  },
  rText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(12),
    color: '#190C04',
    textAlign: 'right',
    width: '25%',
  },
  icon: {
    width: GlobalWidth(25),
    height: GlobalWidth(25),
    resizeMode: 'contain',
  },
  send: {
    width: GlobalWidth(30),
    height: GlobalWidth(30),
    resizeMode: 'contain',
    marginTop: 7,
  },
});
