import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFF',
    borderTopEndRadius: 12,
    borderTopLeftRadius: 12,
    paddingVertical: GlobalHeight(8),
    paddingHorizontal: GlobalWidth(16),
    justifyContentl: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  addView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C9C8F6',
    borderRadius: 6,
    paddingVertical: GlobalHeight(8),
  },
  addText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: GlobalWidth(12),
    // lineHeight: GlobalHeight(18),
    color: '#272727',
  },
});
