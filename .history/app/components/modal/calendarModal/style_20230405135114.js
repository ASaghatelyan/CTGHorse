import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
const widthFigma = 375
const heightFigma = 812

const globalWidth = (a) => {
    return ((width * a) / widthFigma)
}
const globalHeight = (a) => {
    return ((height * a) / heightFigma)
}

export const styles = StyleSheet.create({
    content: {
        marginTop: Platform === 'ios' ? globalHeight(50) : null,
        marginHorizontal: globalWidth(24)
    },
    topBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: globalWidth(20),
    },
    arrowIc: {
        width: globalWidth(28),
        height: globalHeight(28),
        marginHorizontal: globalWidth(-10),
        marginBottom: globalHeight(10)
    },
    titleText: {
        color: "#000",
        fontSize: globalWidth(16),
        lineHeight: globalHeight(24),
        fontFamily: "Roboto-Medium",
        marginLeft: globalHeight(2),
        marginBottom: globalHeight(10)
    },
});

