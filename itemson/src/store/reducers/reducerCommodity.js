import {commodityType,GET_DATA2} from "../actionTypes"
const initialState = {
    data: [],
    data2: [],
    data3:[]
}
export default   (state=initialState, action) => {
    switch (action.type) {
        case commodityType.GET_DATA:
            return {
                ...state,
                data:action.dat
            }
            case commodityType.GET_DATAS:
                    return {
                        ...state,
                        data2:action.datas
                    }  
                    case GET_DATA2:
                        return {
                            ...state,
                            data3:action.listuu
                        }           
             default:
                    return state

    }
}

