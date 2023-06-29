import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';
 let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
 
export const styles = StyleSheet.create({
  calcelText: {
    flexDirection: 'row',
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstView: {
    backgroundColor: '#190C04',
    flex: 0.1, 
    paddingHorizontal: GlobalWidth(15),
  },
  inputView: {
    borderRadius: 22,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: GlobalWidth(19),
    width: GlobalWidth(263),
  },
  searchInput: {
    flex: 1,
    height: GlobalHeight(45),
    paddingRight: GlobalWidth(10),
  },
  searchIc: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    resizeMode: 'contain',
    tintColor: '#190C04',
    marginRight: GlobalWidth(10),
  },
  hisItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: GlobalHeight(11),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(25, 12, 4, 0.64)',
    paddingHorizontal: GlobalWidth(15),
  },
  nameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(19),
    resizeMode: 'contain',
    marginRight: GlobalWidth(8),
  },
  nameText: {
    width: GlobalWidth(268),
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  delView: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  delIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(19),
    resizeMode: 'contain',
  },
});
