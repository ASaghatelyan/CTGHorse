import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gView: { 
    justifyContent: 'space-between',
    // flex: 1,
    height:'100%', 
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:GlobalHeight(100)
  },
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  avaView: {
    marginBottom: GlobalHeight(32),
    alignItems: 'center',
  },
  uplIc: {
    width: GlobalWidth(64),
    height: GlobalHeight(64),
    marginBottom: GlobalHeight(44),
  },
  openItemView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    paddingVertical: GlobalHeight(15),
    paddingHorizontal: GlobalWidth(12),
    borderRadius: 8,
    marginBottom: GlobalHeight(16),
  },
  openItemText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    marginLeft: GlobalWidth(10),
  },
  fileIc: {
    width: GlobalWidth(20),
    height: GlobalHeight(19),
  },
  cameraIc: {
    width: GlobalWidth(18),
    height: GlobalHeight(15),
  },
  uplView: {
    width: '100%',
    marginBottom:GlobalHeight(30)
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    lineHeight: GlobalHeight(41),
    color: '#FFEBCF',
    marginTop: GlobalHeight(16),
    marginBottom: GlobalHeight(32),
  },
  uplFileView: {
    width: '100%',
    backgroundColor: '#DBC093',
    borderRadius: 8,
    paddingHorizontal: GlobalWidth(16),
    paddingVertical: GlobalHeight(16),
    marginBottom: GlobalHeight(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  uplFileIc: {
    width: GlobalWidth(51),
    height: GlobalWidth(51),
    marginRight: GlobalWidth(16),
  },
  uplDone: {
    width: GlobalWidth(30),
    height: GlobalWidth(30),
    marginLeft: GlobalWidth(16),
  },
  itemTitle: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#190C04',
    width: GlobalWidth(154),
    marginBottom: GlobalHeight(8),
  },
  itemInfo: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    width: GlobalWidth(164),
  },
  deleteItemView: {
    width: GlobalWidth(24),
    height: GlobalWidth(24),  
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:GlobalHeight(8),
    right:GlobalWidth(9)
  },
  deleteItem: {
    width: GlobalWidth(20),
    height: GlobalWidth(20), 
  },
});
