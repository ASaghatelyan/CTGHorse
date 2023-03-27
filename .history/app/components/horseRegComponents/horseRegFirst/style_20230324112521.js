import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  {height: 70, width: 122, borderRadius: 8}: {
  
    width:122,
    height:222,
    backgroundColor:"#FFF"
  },
  gContainer: {
    flexDirection: 'row', 
  },
  container: {
    flexGrow: 1, 
    paddingRight: GlobalWidth(11),
    justifyContent: 'space-between',
    // marginBottom:16
  },
  mainView: {
    paddingBottom: GlobalHeight(150),
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(41),
    color: '#FFEBCF',
    marginBottom: GlobalHeight(8),
  },
  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#FFEBCF',
  },
  gPhoto: {
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: GlobalHeight(50),
    // marginVertical: GlobalHeight(5),
    borderRadius: 22,
    marginBottom:GlobalHeight(16)
  },
  gImg: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    marginBottom:GlobalHeight(11)
  },
  loadPhoto:{
    
  },
  generalImg: {
    width: GlobalWidth(260),
    height: GlobalHeight(150), 
    marginBottom:GlobalHeight(8),
    borderRadius:22
  },
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  gVideoCont: { 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gVideo: {
    width:GlobalWidth(122),
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingVertical: GlobalHeight(27),
    // marginVertical: GlobalHeight(5),
    borderRadius: 8,
    height:GlobalHeight(70)
  },
  gVidImg: {
    width: GlobalWidth(16),
    height: GlobalHeight(16),
  },
});
