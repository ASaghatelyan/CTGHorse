import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content:{
    flex:1
  },
  generalView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: GlobalHeight(270),
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  pdf: { 
    width: width,
    height: height/2,
  },
});
