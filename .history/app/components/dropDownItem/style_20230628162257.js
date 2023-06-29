import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gView: {
    width: '100%',
    marginBottom:GlobalHeight(16)
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    width: '100%',
    paddingVertical: GlobalHeight(14),
    paddingHorizontal: GlobalWidth(16),
    borderRadius: 8,
    shadowColor: 'rgba(233, 161, 58,0.3)',
    shadowOffset: {
      width: 0,
      height: 5, 
    },
    shadowOpacity: 0.76,
    shadowRadius: 1.68, 
    minHeight:50
  },
  reqFields: {
    color: '#FF2D55',
    fontSize: 20,
    position: 'absolute',
    left: -10,
    top: 1,
  },
  openIc: {
    position: 'absolute',
    width: GlobalWidth(20),
    height: GlobalHeight(20),
    right: GlobalWidth(16),
  },
  openText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    /: GlobalHeight(19),
    color: '#FFEBCF',
    width:GlobalWidth(295)
  },
  titleText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    /: GlobalHeight(19),
    color: '#FFEBCF',
    marginBottom: GlobalHeight(8),
  },
});
