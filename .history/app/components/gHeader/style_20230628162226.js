import {StyleSheet, Dimensions, Platform} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : GlobalHeight(10),
    paddingBottom: Platform.OS === 'ios' ? GlobalHeight(10) : GlobalHeight(10),
    paddingHorizontal: GlobalWidth(16),
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
    marginBottom: GlobalHeight(24),
  },
  btnView: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 16,
  },
  btn: {
    width: GlobalWidth(16),
    height: GlobalHeight(16),
    resizeMode: 'contain',
  },
  nameText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(24),
    color: '#272727',
    textAlign: 'center',
  },
});
