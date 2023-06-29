import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {},
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalLineHeight(19),
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
  btnView: {
    marginTop: GlobalHeight(64),
  },
  showPassBtnAndroid: {
    position: 'absolute',
    top: GlobalHeight(14),
    right: GlobalHeight(22),
  },
  showPassBtnIOS: {
    position: 'absolute',
    top: GlobalHeight(37),
    right: GlobalHeight(12),
  },
  backView: {
    marginBottom: GlobalHeight(15),
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: GlobalWidth(12),
    height: GlobalHeight(20),
    resizeMode: 'contain',
  },
  updViwe: {
    flexGrow: 1,
    backgroundColor: '#1A0C04',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  updText:{
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(41),
    color: '#FFEBCF', 
  },
  done:{
    marginVertical:GlobalHeight(16),
    width:GlobalWidth(51),
    height:GlobalWidth(51), 
    borderRadius:100
  },
  doneText:{
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: ' rgba(255, 255, 255, 0.64)', 
    marginBottom:GlobalHeight(62),
    textAlign:'center'

  },

});
