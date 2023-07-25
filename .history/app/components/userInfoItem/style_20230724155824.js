import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    width: GlobalWidth(155),
    backgroundColor: 'white',
    marginHorizontal: GlobalWidth(16),
    marginVertical: GlobalHeight(8),
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24, 
    padding:10
  },
  imageContainer: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14), 
    color: '#190C04', 
  },
   
});
