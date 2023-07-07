import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
    height: '100%',
  },
  video: {
    height: GlobalHeight(70),
    width: GlobalWidth(116),
    borderRadius: 8,
  },
  gContainer: {
    flexDirection: 'row',
    backgroundColor:'red'
  },
  container: {
    flexGrow: 1,
    paddingRight: GlobalWidth(11),
    justifyContent: 'space-between',
    // marginBottom:16
  },
  mainView: {
    paddingBottom: GlobalHeight(150),
  },
  title: {
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(20),
    // lineHeight: GlobalHeight(41),
    color: '#FFEBCF',
    marginBottom: GlobalHeight(8),
  },
  text: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(16),
    // lineHeight: GlobalHeight(19),
    color: '#FFEBCF',
  },
  gPhoto: {
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: GlobalHeight(50),
    // marginVertical: GlobalHeight(5),
    borderRadius: 22,
    marginBottom: GlobalHeight(16),
    // flex: 1,
  },
  gImg: {
    width: GlobalWidth(24),
    height: GlobalHeight(24),
    marginBottom: GlobalHeight(11),
    resizeMode:'contain'
  },
  loadPhoto: {
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: GlobalHeight(5),
    borderRadius: 22,
    marginBottom: GlobalHeight(16),
    flex: 1,
    overflow:'hidden'
  },
  generalImg: {
    width: GlobalHeight(260),
    height: GlobalHeight(150),
    borderRadius: 22,  
    resizeMode:'contain'
  }, 
  gText: {
    fontFamily: 'SFProText-Regular',
    fontSize: GlobalWidth(14),
    // lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
  },
  gVideoCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gVideo: {
    width: GlobalWidth(117),
    backgroundColor: 'rgba(219, 192, 147, 0.3)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: GlobalHeight(70),
  },
  gVidImg: {
    width: GlobalWidth(16),
    height: GlobalHeight(16),
  },
});
