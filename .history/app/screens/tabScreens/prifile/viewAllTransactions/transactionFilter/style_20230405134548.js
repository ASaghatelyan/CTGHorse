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
    paddingBottom: GlobalHeight(20),
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
  allText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(22),
    lineHeight: GlobalHeight(28),
    color: '#190C04',
  },
  calendarIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
  },
  calView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderWidth: 1,
    borderColor: 'rgba(25, 12, 4, 0.64)',
    borderRadius: 8,
    paddingVertical: GlobalHeight(14),
    paddingHorizontal: GlobalWidth(12),
    marginBottom:GlobalHeight(16) ,
    marginTop:GlobalHeight(8)
  },
  selectedText: {
    color: '#8E8E93',
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(15),
    lineHeight: GlobalHeight(20),
  },
  selectedTitleText:{
    color: '#190C04',
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(175),
    lineHeight: GlobalHeight(20),
  },
});
