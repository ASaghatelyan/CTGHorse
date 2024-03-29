import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {GlobalHeight, GlobalWidth} from 'app/constant/styleConstants';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:GlobalHeight(29),
        marginBottom:GlobalHeight(18)
    },
    text:{
        flexDirection: 'row',
    fontFamily: 'SFProText-SemiBold',
    fontSize: GlobalWidth(16),
    lineHeight: GlobalHeight(19),
    color: '#E9A13A',
    },
});
