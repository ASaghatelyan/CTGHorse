import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flexGrow: 1, 
    backgroundColor: '#FFF',
  },
  title: {
    flexDirection: 'row',
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(27),
    color: '#E9A13A',
    marginBottom: GlobalHeight(50),
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // height: 250,
    backgroundColor:'#fff'
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingBottom:22
  },
 
  borderBtnView: {
    borderWidth: 1,
    borderColor: '#190C04',
    minWidth: GlobalWidth(150),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: GlobalWidth(8),
  },
  borderBtnText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#190C04',
    paddingVertical: GlobalHeight(15),
  },
  btnView: {
    backgroundColor: '#190C04',
    minWidth: GlobalWidth(150),
    alignItems: 'center',
    borderRadius: 8,
    borderWidth:1,
     borderColor:'#190C04'
  },
  btnText: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#FFEBCF',
    paddingVertical: GlobalHeight(15),
  },
});
