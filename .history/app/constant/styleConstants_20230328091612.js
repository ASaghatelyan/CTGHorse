import { Dimensions } from "react-native"
import {useSafeAreaInsets} from 'react-native-safe-area-context';

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;

const widthFigma = 375
const heightFigma = 812

export const GlobalWidth = (a) => {
    return ((width * a) / widthFigma)
}
export const GlobalHeight = (a) => {
    return ((height * a) / heightFigma)
}
