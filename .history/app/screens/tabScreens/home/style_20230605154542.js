import {StyleSheet, Dimensions} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';
import { GHeader } from 'app/components/gHeader';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  generalView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingBottom: GlobalHeight(80),
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  topImg:{
    width:width,
    height:GlobalHeight(226),
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    position:'absolute',
    top:0
  },
  singUpText: {
    flexDirection: 'row',
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(14),
    lineHeight: GlobalHeight(17),
    color: '#E9A13A',
  },
  noData: {
    flexDirection: 'row',
    fontFamily: 'SFProText-Bold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(27),
    color: '#190C04', 
  },
  noDataView:{
    height: GH(400),
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(18),
    lineHeight: GlobalHeight(21),
    color: '#190C04',
    marginBottom: GlobalHeight(6),
    marginHorizontal: GlobalWidth(15),  
  },
});
