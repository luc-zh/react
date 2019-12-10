import {CHANGE_LIST, GET_GETDATA} from "../actionTypes";
const initalState={
    list:[],
    listDa:[]
}
export default (state=initalState,action)=>{
    switch (action.type){
        case CHANGE_LIST:
        return{...state,list:action.data}
        case GET_GETDATA:
            return{
                ...state,
                listDa:action.listDa
            }
        default:
            return state
    }

}