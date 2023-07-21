import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5', 
  },
  scroll: {
    flexGrow: 1,
    paddingHorizontal: GlobalWidth(15),
   
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(22), 
    color: '#190C04',
    marginBottom: GlobalHeight(22),
    textAlign: 'center',
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  editImg: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: GlobalHeight(12),
    marginBottom: GlobalHeight(32),
  },
  userImg: {
    width: GlobalWidth(89),
    height: GlobalWidth(89),
    borderColor: '#E9A13A',
    borderWidth: 2,
    borderRadius: 100,
  },
  editIc: {
    width: GlobalWidth(32),
    height: GlobalHeight(32),
    position: 'absolute',
    right: -7,
    top: -9,
    resizeMode: 'contain',
  },
  editView: {
    flexDirection: 'row',
  },
  changePass: {
    paddingVertical: GlobalHeight(11),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(25, 12, 4, 0.64)',
    marginTop: GlobalHeight(43),
  },
  changePassText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  deletAccount: {
    paddingVertical: GlobalHeight(11),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(25, 12, 4, 0.64)',
    marginTop: GlobalHeight(32),
  },
  deletAccountText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    // lineHeight: GlobalHeight(22),
    color: '#E93A3A',
  },
  infoText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(22),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  saveBtn: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: GlobalWidth(15),
    backgroundColor: '#f5f5f5',
    paddingBottom: GlobalHeight(30),
  },
});
