import {combineReducers} from "redux";
import home from "./reducerHome"
import cart from "./reducerCart"
import logn from "./reducerLogn"
import reg from './reducerRegister'
import cen from "./reducerCneters"
import par from "./reducerParticul"
import com from "./reducerCommodity"
export default combineReducers({
    home,
    cart,
    logn,
    reg,
    cen,
    par,
    com
})
