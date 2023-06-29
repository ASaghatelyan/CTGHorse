import { StyleSheet, Dimensions } from "react-native";
import { GlobalHeight,GlobalWidth } from "../../constant/styleConstants";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    btnView:{
        width:'100%',
        alignItems:'center',
    },
    btn: {
        width:'100%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#E9A13A',
        borderRadius: GlobalWidth(14),
        paddingVertical: GlobalHeight(14),
    },
    btnName: {
        fontSize: GlobalWidth(16),
        lineHeight: GlobalHeight(19), 
        color: "#FFF",
        fontFamily: "SFProText-Regular"
    }
});