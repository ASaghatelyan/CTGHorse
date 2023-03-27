import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  calcelText: {
    flexDirection: 'row',
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputView: {
    borderRadius: 22,
    backgroundColor: '#FFF',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:GlobalWidth(19)
  },
  searchInput: {
    width: GlobalWidth(263), 
    height: GlobalHeight(45), 
  },
  searchIc: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    tintColor:'#190C04',
    marginRight:(10)
  },
});
