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
    paddingHorizontal:GlobalWidth(15)
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(23),
    color: '#190C04',
    marginBottom: GlobalHeight(8), 
    marginLeft:GlobalWidth(15)
  },
  generalView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: GlobalHeight(20),
  },
  ownerTop: {
    paddingHorizontal: GlobalWidth(15),
    width: '100%',
  },
  ownerView: {
    paddingHorizontal: GlobalWidth(10),
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(25, 12, 4, 0.64)',
    borderRadius: 22,
    paddingVertical: GlobalHeight(10),
  },
  ownerText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    marginBottom: GlobalHeight(8),
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom:GlobalHeight(4)
  },
  contactType: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    marginVertical: GlobalHeight(8),
  },
  address: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    marginVertical: GlobalHeight(4),
  },
  ownerImg: {
    width: GlobalWidth(44),
    height: GlobalWidth(44),
    marginRight: GlobalWidth(4),
  },
  picView: {
    flexDirection: 'row',
  },
  chatIc: {
    width: GlobalWidth(42),
    height: GlobalWidth(42),
    resizeMode: 'contain',
  },
  callIc: {
    width: GlobalWidth(42),
    height: GlobalWidth(42),
    resizeMode: 'contain',
    marginBottom:GlobalHeight(10)
  },
  gFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stars: {
    marginTop: GlobalHeight(8),
    width: GlobalWidth(25),
  },
});
