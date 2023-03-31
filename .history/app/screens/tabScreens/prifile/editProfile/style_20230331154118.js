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
    paddingBottom: 88,
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(22),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
    marginBottom: GlobalHeight(22),
    textAlign: 'center',
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  editImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: GlobalHeight(12),
  },
  userImg: {
    width: GlobalWidth(89),
    height: GlobalHeight(89),
    borderColor: '#FFEBCF',
    borderWidth: 2,
    borderRadius: 100,
  },
  editIc: {
    width: GlobalWidth(32),
    height: GlobalHeight(32),
    // marginRight: GlobalWidth(6),
    position:'absolute',
  },
  editView: {
    flexDirection: 'row',
  },
});
