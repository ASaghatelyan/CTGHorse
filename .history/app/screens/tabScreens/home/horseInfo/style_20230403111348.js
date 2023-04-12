import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: '#F5F5F5',
  },
  callView:{
marginBottom:GlobalHeight(10)
  },
  imageContainer: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    overflow: 'hidden',
  },
  backView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: GlobalWidth(15),
  },
  custom: {marginTop: GlobalHeight(32)},
  backIc: {
    tintColor: '#FFF',
    width: GlobalWidth(11),
    height: GlobalHeight(20),
    marginRight: GlobalWidth(5),
  },
  backText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#FFF',
  },
  likeView: {
    position: 'absolute',
    bottom: GlobalHeight(37),
    right: GlobalWidth(23),
    width: 24,
    height: 24,
    alignContent: 'center',
    justifyContent: 'center',
  },
  like: {
    width: GlobalWidth(29),
    height: GlobalHeight(26),
  },
  topImg: {
    width: '100%',
    height: GlobalHeight(259),
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginBottom: GlobalHeight(16),
  },
  singUpText: {
    flexDirection: 'row',
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#E9A13A',
  },
  horseImgView: {
    marginRight: GlobalWidth(8),
  },
  docIc: {
    width: GlobalWidth(42),
    height: GlobalWidth(42),
    resizeMode: 'contain',
  },
  horseIc: {
    width: GlobalWidth(48),
    height: GlobalWidth(48),
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom: GlobalHeight(6),
    marginHorizontal: GlobalWidth(16),
    marginTop: GlobalHeight(32),
  },
  infoView: {
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    marginHorizontal: GlobalWidth(15),
    borderRadius: 22,
    paddingVertical: GlobalHeight(12),
    paddingHorizontal: GlobalWidth(27),
    marginBottom: 16,
  },
  titleInfo: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom: GlobalHeight(6),
  },
  titleName: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    marginBottom: GlobalHeight(6),
  },
  titlePrice: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#E9A13A',
    marginBottom: GlobalHeight(6),
  },
  topImgView: {
    flexGrow: 1,
    paddingHorizontal: GlobalWidth(11),
    paddingBottom: 20,
  },
  moreView: {
    flexGrow: 1,
    paddingHorizontal: GlobalWidth(11),
    marginBottom: GlobalHeight(20),
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
  },
  contactType: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    marginVertical: GlobalHeight(8),
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
    marginBottom:(10)
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