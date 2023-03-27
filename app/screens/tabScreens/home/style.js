import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  generalView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: GlobalHeight(230),
  },
  topImg:{
    width:width,
    height:GlobalHeight(226),
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    position:'absolute',
    top:0
  },
  singUpText: {
    flexDirection: 'row',
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom: GlobalHeight(6),
    marginHorizontal: GlobalWidth(16), 
    marginTop:76 
  },
});
