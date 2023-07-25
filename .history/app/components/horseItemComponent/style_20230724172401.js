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
    overflow: 'hidden',
  },
  imageContainer: {
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    overflow: 'hidden',
  },
  image: {
    width: '155',
    height:'50%',
    // aspectRatio: 1,
    resizeMode: 'contain',
  },
  nameText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#190C04',
    marginTop: GlobalHeight(4),
    marginHorizontal: GlobalWidth(8),
    letterSpacing: -0.24,
  },
  regN: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: 'rgba(25, 12, 4, 0.64)',
    marginTop: GlobalHeight(4),
    marginHorizontal: GlobalWidth(8),
    letterSpacing: -0.24,
  },
  priceText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#E9A13A',
    marginBottom: GlobalHeight(4),
    marginHorizontal: GlobalWidth(8),
    letterSpacing: -0.24,
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    // lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom: GlobalHeight(16),
    marginHorizontal: GlobalWidth(16),
    height: GlobalHeight(25),
  },
  likeView: {
    position: 'absolute',
    top: GlobalHeight(9),
    right: GlobalWidth(9),
    width: 24,
    height: 24,
    alignContent: 'center',
    justifyContent: 'center',
  },
  like: {
    width: GlobalWidth(22),
    height: GlobalHeight(20),
    resizeMode: 'contain',
  },
});
