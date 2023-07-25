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
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    overflow: 'hidden',
  },
  avatar: {
    width: GlobalWidth(60),
    height: GlobalWidth(60),
    // aspectRatio: 1,
    // resizeMode: 'contain',
    borderRadius: 100,
    marginVertical: GlobalHeight(10),
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    color: '#190C04',
  },
  stars: {
    marginTop: GlobalHeight(8),
    width: GlobalWidth(25),
    marginVertical: GlobalHeight(10),
  },
});
