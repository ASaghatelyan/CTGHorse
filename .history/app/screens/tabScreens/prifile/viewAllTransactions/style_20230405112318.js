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
  monthText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(28),
    color: '#190C04',
    marginVertical: GlobalHeight(16),
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
  input: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    backgroundColor: '#EEEEEE', 
    borderRadius: 22,
    paddingVertical: GlobalHeight(14),
    marginVertical: GlobalHeight(16),
    paddingHorizontal: GlobalWidth(14),
    marginBottom:GlobalHeight(32)
  },
  filterView:{
    backgroundColor:'#E9A13A',
    paddingVertical:GlobalHeight(7),
    paddingHorizontal:(10)
  },
  filterText:{},
  filterIc:{},
});
