import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: GlobalWidth(15),
    marginBottom: GlobalHeight(35),
  },
  backBtnView: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: GlobalWidth(9),
  },
  backBtn: {
    width: GlobalWidth(12),
    height: GlobalHeight(20),
    resizeMode: 'contain',
  },
  userAva: {
    width: GlobalWidth(50),
    height: GlobalWidth(50),
    borderRadius: 100,
    marginRight: GlobalWidth(8),
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
  },
  activeView: {
    flexDirection: 'row',
  },
  activeNow: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(10),
    lineHeight: GlobalHeight(12),
    color: '#DEDEDE',
    marginRight: GlobalHeight(8),
  },
  activIc: {
    width: GlobalWidth(8),
    height: GlobalWidth(8),
  },
  leftChatView: {
     
  },
  activeIcNow: {
    width: GlobalWidth(8),
    height: GlobalWidth(8),
    borderWidth: 2,
    borderRadius: 100,
    borderColor: '#FFF',
    position:'absolute',
    right:13
  },
  leftTextView:{
    backgroundColor:'rgba(228, 228, 228, 0.83)',
    alignItems:'center',
    justifyContent:'center',
     padding:GlobalHeight(10),
    borderRadius:20,
    borderBottomLeftRadius:0,
    maxWidth:width-88
  }
});
