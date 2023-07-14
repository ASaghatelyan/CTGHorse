import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  input: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    backgroundColor: '#EEEEEE',
    borderRadius: 22,
    paddingVertical: GlobalHeight(14),

    paddingHorizontal: GlobalWidth(10), 
    flex: 1,
  },
  searchView: {
    backgroundColor: 'red',
    marginHorizontal: GlobalWidth(15),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 22,
    marginVertical: GlobalHeight(16),
  },
  searchIc: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    tintColor: '#190C04',
    marginRight: GlobalWidth(5),
  },
  delIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(20),
    tintColor: 'red',
    marginRight: GlobalWidth(5),
  },
  delIcView: {
    width: GlobalWidth(24),
    height: GlobalHeight(24), 
    marginRight: GlobalWidth(5),
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
    borderWidth: 1,
    borderColor: '#E9A13A',
  },
  avaText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: 'rgba(25, 12, 4, 0.64)',
  },
  recentItem: {
    marginRight: GlobalWidth(16),
  },
  nameText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(11),
    // lineHeight: GlobalHeight(13),
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
    // lineHeight: GlobalHeight(28),
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
    marginVertical: GlobalHeight(20),
    backgroundColor: '#F5F5F5',
  },
  messageView: {
    marginLeft: GlobalWidth(23),
    flex: 1,
    justifyContent: 'space-between',
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: GlobalHeight(9),
  },
  messName: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    // lineHeight: GlobalHeight(21),
    color: '#190C04',
    maxWidth: GlobalWidth(220),
    textTransform: 'capitalize',
  },
  messDate: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#C6C6C8',
  },
  messText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: 'rgba(25, 12, 4, 0.64)',
    // width:210
  },
  deleteChatView: {
    margin: 0,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: GlobalWidth(73),
    backgroundColor: '#FF2D55',
    height: GlobalHeight(48),
    marginTop: GlobalHeight(21),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.27,
    elevation: 10,
    marginRight: GlobalWidth(15),
  },
  deleteChat: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
  },
});
