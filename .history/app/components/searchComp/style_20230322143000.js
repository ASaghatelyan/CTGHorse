import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  searchView: {
    // height: GlobalHeight(22),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: GlobalHeight(14),
    borderRadius: 22,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: GlobalWidth(14), 
    backgroundColor:'red'
  },
  search: {
    color: '#272727',
    width:310
  },
  img: {
    width: GlobalWidth(22),
    height: GlobalHeight(22),
    resizeMode: 'contain',
    tintColor: 'rgba(25, 12, 4, 0.64)',
  },
});
