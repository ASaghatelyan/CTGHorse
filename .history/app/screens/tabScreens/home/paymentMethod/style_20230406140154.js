import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: GlobalWidth(15),
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(23),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
    marginLeft: GlobalWidth(15),
  },
  generalView: {
    flexGrow: 1,
  },
  methodItem: {
    backgroundColor: '#FFF',
    paddingVertical: GlobalHeight(24),
    marginBottom: GlobalHeight(16),
    borderRadius: 9,
    paddingHorizontal: GlobalWidth(13),
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height:20,
    },
    shadowOpacity: 0.29,
    shadowRadius: 1.3,

    elevation: 13,
  },
  typeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: GlobalHeight(19),
  },
  typeIc: {
    width: GlobalWidth(63),
    height: GlobalHeight(20),
    resizeMode: 'contain',
  },
  picIc: {
    width: GlobalWidth(16),
    height: GlobalWidth(16),
  },
});
