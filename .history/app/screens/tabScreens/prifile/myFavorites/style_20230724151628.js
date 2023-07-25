

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
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    // lineHeight: GlobalHeight(23),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: GlobalWidth(15),
  },
  noFavView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noFavText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    // lineHeight: GlobalHeight(23),
    color: '#190C04',
  },
  seeAll: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(23),
    color: 'rgba(233, 161, 58, 1)',
  },
  generalView: {
    flexGrow: 1,
    flexDirection: 'row',
    paddingBottom: GlobalHeight(20),
  },
});
