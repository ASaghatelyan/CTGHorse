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
  incomesBalance: {
    paddingHorizontal: GlobalWidth(21),
    paddingVertical: GlobalHeight(16),
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(84, 84, 88, 0.65)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:21
  },
  accountBalance: {
    paddingHorizontal: GlobalWidth(21),
    // paddingVertical: GlobalHeight(16),
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderBottomColor: 'rgba(84, 84, 88, 0.65)',
    borderTopColor: 'rgba(84, 84, 88, 0.65)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 24,
  },
  accountText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(15),
    lineHeight: GlobalHeight(20),
    color: '#FFF',
    marginVertical:12
  },
  priceText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(15),
    lineHeight: GlobalHeight(20),
    color: '#E9A13A',
  },
  addTextView: {
    width: '26%',
    marginBottom: GlobalHeight(32),
  },
  addText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(18),
    color: '#E9A13A',
  },
  addItem: {
    backgroundColor: '#190C04',
    borderRadius: 16,
    flexDirection: 'row',
    padding: GlobalWidth(16),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: GlobalHeight(8),
  },
  addLeftView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  added: {
    width: GlobalWidth(40),
    height: GlobalHeight(25),
    marginRight: GlobalWidth(10),
  },
  saveingText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(15),
    lineHeight: GlobalHeight(20),
    color: '#FFF',
  },
  saveNumText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(13),
    lineHeight: GlobalHeight(18),
    color: 'rgba(235, 235, 245, 0.6)',
  },
  rigth: {
    tintColor: '#9EA2B3',
    width: GlobalWidth(8),
    height: GlobalHeight(14),
  },
  rescentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: GlobalHeight(16),
  },
  recentText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(22),
    lineHeight: GlobalHeight(28),
    color: '#190C04',
  },
  viewAllText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(13),
    lineHeight: GlobalHeight(18),
    color: '#E9A13A',
  },
  transactionView: {
    backgroundColor: '#190C04',
    borderRadius: 16,
    paddingHorizontal: GlobalWidth(16),
  },
  transactionItem: {
    paddingVertical: GlobalHeight(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#545458',
    borderBottomWidth: 1,
  },
  dateText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#FFF',
  },
  transactionNumText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(13),
    lineHeight: GlobalHeight(18),
    color: '#FFF',
    maxWidth: GlobalWidth(240),
  },
  transactionPrice: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(17),
    lineHeight: GlobalHeight(22),
    color: '#FFF',
    marginRight: GlobalWidth(8),
  },
  rightView: {
    flexDirection: 'row',
  },
  rigthT: {
    width: 8,
    tintColor: '#9EA2B3',
    resizeMode: 'contain',
  },
});
