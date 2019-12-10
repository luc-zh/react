import {GET_DATATO, ADD_NUMBER,EVENUMBER,DELETE,CHECKBOX,CHE} from "../actionTypes";

const initialState = {
    title: '购物车',
    meihang:0,
    checked:false,
    zongjian:0,
    arrDate: []
}
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATATO:
            return {
                ...state,
                arrDate:action.datato
            }
        case ADD_NUMBER:
             let state0 = JSON.parse(JSON.stringify(state))
             console.log(action.item)
             let index = state0.arrDate.findIndex((item)=> item.id === action.item.id)
             state0.arrDate[index].num++
             state0.meihang=state0.arrDate[index].pic* state0.arrDate[index].num
            console.log(state0.meihang) 
             return state0
             case EVENUMBER:
            let state1 = JSON.parse(JSON.stringify(state))
            console.log(action.item)
            let index1 = state1.arrDate.findIndex((item)=> item.id === action.item.id)
            if(state1.arrDate[index1].num===1){
                    state1.arrDate[index1].num=1
                    state1.meihang=state1.arrDate[index1].pic
                }else{
                    state1.arrDate[index1].num--
                    state1.meihang=state1.meihang-state1.arrDate[index1].pic
                    console.log(state1.meihang)
                }
                return state1
                case CHECKBOX:
                let state2 = JSON.parse(JSON.stringify(state))
                let index2 = state2.arrDate.findIndex((item)=> item.id === action.item.id)
                if(state2.arrDate[index2].checked===false){
                        state2.arrDate[index2].checked=true  
                        state2.zongjian=state2.arrDate[index2].pic
                        console.log(state2.zongjian)
                    } else{
                        state2.arrDate[index2].checked=false
                    }
                return state2
                case DELETE:
                        let state5 = JSON.parse(JSON.stringify(state))
                         state5.arrDate.splice(0,1)     
                        return state5
                        case CHE:
                        let state6 = JSON.parse(JSON.stringify(state))
                       
                        if(action.e.target.checked){
                            state6.arrDate.map((item)=>{
                                item.checked=true
                             })
                        }else{
                            state6.arrDate.map((item)=>{
                                item.checked=false
                             })
                        } 
                            console.log(state6.checked)
                            return state6
        default:
            return state
    }
}
