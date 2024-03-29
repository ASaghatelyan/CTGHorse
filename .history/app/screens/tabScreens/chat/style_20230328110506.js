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
    paddingRight: GlobalWidth(37),
  },
  searchIc: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    tintColor: '#190C04',
    position: 'absolute',
    right: GlobalWidth(27),
    top: GlobalHeight(26),
  },
  avaView: {
    flexDirection: 'row',
    paddingHorizontal: GlobalWidth(15),
  },
  avatar: {
    width: GlobalWidth(48),
    height: GlobalWidth(48),
    borderRadius: 100,
    marginRight: GlobalWidth(8),
  },
  avaText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  recentItem: {
    marginRight: GlobalWidth(16),
  },
  nameText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(11),
    lineHeight: GlobalHeight(13),
    color: 'rgba(25, 12, 4, 0.64)',
    marginTop: GlobalHeight(8),
    maxWidth: GlobalWidth(50),
    textAlign: 'center',
  },
  recentText: {
    marginLeft: GlobalWidth(15),
    marginBottom: GlobalHeight(16),
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(28),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  recentView: {
    flexDirection: 'row',
    paddingHorizontal: GlobalWidth(15),
    marginBottom: GlobalHeight(16),
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: GlobalWidth(15),
  },
  messageView: {
    marginLeft: GlobalWidth(23), 
    flex: 1,
    justifyContent:'space-between',
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:GlobalHeight(9)
  },
  messName:{
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
  },
  messDate:{
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#C6C6C8',
  },
  messText:{
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#C6C6C8',
  },
});
