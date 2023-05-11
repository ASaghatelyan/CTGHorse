import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  modalView: {margin: 0},
  content: {
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    paddingVertical: GlobalHeight(30),
    paddingHorizontal: GlobalWidth(15),
    borderRadius: 20,
  },  
  inputView:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between', 
  },
  closeView: {
    position: 'absolute',
    right: GlobalWidth(10),
    top: GlobalHeight(5),
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1111,
  },
  close: {
    width: GlobalWidth(16),
    height: GlobalWidth(16),
  },
  horseIc: {
    width: GlobalWidth(155),
    height: GlobalHeight(155),
    borderRadius: 22,
    marginBottom: GlobalHeight(16),
  },
  totlaPayment: {
    width: '100%',
    backgroundColor: '#E6E6E6',
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingVertical: GlobalHeight(20),
    paddingHorizontal: GlobalWidth(16),
  },
  errView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 4,
marginTop:GlobalHeight(12)
  },
  errIcon: {
    width: GlobalWidth(10),
    height: GlobalHeight(10),
    marginRight: GlobalWidth(9),
  },
  errText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(10),
    lineHeight: GlobalHeight(15),
    color: '#C60000',
  },
  err: {
    height: GlobalHeight(15),
    marginBottom: GlobalHeight(4),
  },

});
