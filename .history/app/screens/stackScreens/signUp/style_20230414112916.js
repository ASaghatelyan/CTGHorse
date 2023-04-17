import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
  },
  subTitleText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom: GlobalHeight(82),
  },
   btnView:{ 
    marginTop:GlobalHeight(64)
   },
  singUpView: {
    flexDirection: 'row',
    marginTop:GlobalHeight(32),
    justifyContent:'center',
  },
  haveAccount: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    marginRight: GlobalWidth(8),
  },
  singUpText: { 
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  showPassBtnAndroid: {
    position: "absolute",
    top: GlobalHeight(14),
    right: GlobalHeight(22),
},
showPassBtnIOS: {
    position: "absolute",
    top: GlobalHeight(37),
    right: GlobalHeight(12)
},
join:{
  fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(18),
    color: '#E9A13A',
},

});
