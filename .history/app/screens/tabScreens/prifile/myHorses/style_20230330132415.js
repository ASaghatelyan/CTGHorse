import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  generalView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: GlobalHeight(250),
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(27),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  itemsView: { 
    
  },
  noHorseView: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  addBtn: {
    position: 'absolute',
    bottom: GlobalHeight(20),
    width: '100%',
    paddingHorizontal: 15,
  },
  noHorse: {
    width: GlobalWidth(61),
    height: GlobalHeight(57),
  },
  listText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(22),
    color: '#190C04',
    marginVertical: GlobalHeight(16),
  },
  detileText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#E9A13A',
  },
  addView: {
    borderRadius: 8,
    backgroundColor: '#190C04',
    paddingVertical: GlobalHeight(15),
    paddingHorizontal: GlobalWidth(49),
    marginTop: 32,
  },
  addText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  userView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: GlobalWidth(15),
  },
  nameView: {
    justifyContent: 'space-between',
    marginLeft: GlobalWidth(16),
  },
  userPersView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoView: {
    flexDirection: 'row',
  },
  userImg: {
    width: GlobalWidth(89),
    height: GlobalHeight(89),
    borderColor: '#FFEBCF',
    borderWidth: 2,
    borderRadius: 100,
  },
  ic: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    marginRight: GlobalWidth(8),
  },
  infoText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    width: GlobalWidth(150),
  },
});
