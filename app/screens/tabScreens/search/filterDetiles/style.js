import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  itemsView: {
    paddingBottom: GlobalHeight(160),
 
  },
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: GlobalHeight(11),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(25, 12, 4, 0.64)',
    paddingHorizontal: GlobalWidth(16),
  },
  rightIc: {
    width: GlobalWidth(8),
    height: GlobalHeight(13),
    borderRadius: 22,
  },
  leftBtnText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#E9A13A',
  },
  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(20),
    color: '#190C04',
    width:GlobalWidth(300)
  },
  checkView: {
    paddingVertical: GlobalHeight(11),
    borderBottomColor: 'rgba(25, 12, 4, 0.64)',
    borderBottomWidth: 1,
    paddingHorizontal: GlobalHeight(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    backgroundColor: '#EEEEEE',
    marginHorizontal: GlobalWidth(15),
    borderRadius: 22,
    paddingVertical: GlobalHeight(14),
    marginVertical: GlobalHeight(16),
    paddingHorizontal: GlobalWidth(14), 
  },
  bottomView:{
    width:'100%', 
    paddingHorizontal:GlobalWidth(15),
    position:'absolute',
    bottom:0,
    backgroundColor:'#EEEEEE',
    paddingVertical:GlobalHeight(38)
  }
});
