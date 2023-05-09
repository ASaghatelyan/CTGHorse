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
    // paddingHorizontal: GlobalWidth(15),
justifyContent:'space-between'
  },
  addCard:{ 
    width:GlobalWidth(140), 
  },
  addCardText:{
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04', 
    textAlign:'center'
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(24),
    lineHeight: GlobalHeight(23),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
    marginLeft: GlobalWidth(15),
  },
   img:{
    width:'100%',
    height:GlobalHeight(387),
    marginBottom:GlobalHeight(29)
   },
  btn: {
    marginBottom: GlobalHeight(48),
    paddingHorizontal:GlobalWidth(16)
  },
  closeView: {
    position: 'absolute',
    right: GlobalWidth(18),
    top: GlobalHeight(10),
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:1111
  },
  close: {
    width: GlobalWidth(16),
    height: GlobalWidth(16),
  },
});
