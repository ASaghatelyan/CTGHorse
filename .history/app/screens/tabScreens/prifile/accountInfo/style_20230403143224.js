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
    paddingBottom: GlobalHeight(88), 
    paddingHorizontal: GlobalWidth(15),
  },
  information: {
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(84, 84, 88, 0.65)',
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(22),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
    marginBottom: GlobalHeight(22),
    textAlign: 'center',
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  userInfo: {
    paddingVertical: GlobalHeight(24),
    backgroundColor: '#190C04',
    borderRadius: 16,
    marginBottom: GlobalHeight(8),
  },
  userImg: {
    width: GlobalWidth(40),
    height: GlobalWidth(40),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#E9A13A',
  },
  infoTextView: {
    marginHorizontal: GlobalWidth(12),
  },
  infoText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(11),
    lineHeight: GlobalHeight(13),
    color: '#FFF',
  },
  statementView: {
    borderWidth: 1,
    borderColor: '#E9A13A',
    paddingHorizontal: GlobalWidth(20),
    paddingVertical: GlobalHeight(7),
    borderRadius: 100,
  },
  statementText: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(13),
    lineHeight: GlobalHeight(18),
    color: '#E9A13A',
  },
  accountBalance:{
    paddingHorizontal:GlobalWidth(21),
    paddingVertical:GlobalHeight(16),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(84, 84, 88, 0.65)',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  pri
});
