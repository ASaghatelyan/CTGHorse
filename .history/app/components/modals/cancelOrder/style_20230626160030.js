import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingVertical: GlobalHeight(16),
    paddingHorizontal: GlobalHeight(16),
    marginHorizontal: 40,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(18),
    color: '#272727',
    textAlign:'center',
    marginBottom:GlobalHeight(4)
  },
  sureText:{
    fontFamily: 'Inter-Regular',
    fontSize: GlobalWidth(12),
    lineHeight: GlobalHeight(18),
    color: '#272727',
    textAlign:'center',
    marginBottom:GlobalHeight(12)
  },
});
