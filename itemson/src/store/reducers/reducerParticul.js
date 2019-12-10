import axios from "axios"
const  initialState={
        data:[],
        cla:true 
}
export const getDateType={
    GEET_DATE:"GEET_DATE",
    CLICK_DATA:"CLICK_DATA",
    CLICK_DATE_S:" CLICK_DATE_S",
    DIAN_JI:" DIAN_JI"
}
export const getDate=()=>{
    return (dispatch)=>{
        axios.get("/static/data/lovelife1.json").then((res)=>{
            dispatch({
                type:getDateType.GEET_DATE,
                data: res.data.goodl
            })
        },function(err){
            console.log(err)
        })
    }
}
export const zongxiao=()=>{
    return (dispatch)=>{
        axios.get("/static/data/lovelife1.json").then((res)=>{
                
              
          var tt=  res.data.goodl.sort(function(a,b){
                    return b.pic- a.pic
            })
            console.log(tt)
            dispatch({
                type:getDateType.CLICK_DATA,
                tt: tt
            })
        },function(err){
            console.log(err)
        })
    }
}
export const youhuo=()=>{
    return (dispatch)=>{
        axios.get("/static/data/lovelife1.json").then((res)=>{
                 var cc=[]
            res.data.goodl.map((item,index)=>{
               if(item.youhuo){
                cc.push(item)
               }
            })
            dispatch({
                type:getDateType.CLICK_DATE_S,
                cc: cc
            })
        },function(err){
            console.log(err)
        })
    }
}
 export const tupian=()=>({
            type:getDateType.DIAN_JI,
            
        }
    )
        


 const reducer=(state=initialState,action)=>{
    switch(action.type){
        case getDateType.GEET_DATE:
            return{
                ...state,
                data:action.data
            }
            case getDateType.CLICK_DATA:
                return{
                    ...state,
                    data:action.tt
                }
                case getDateType.CLICK_DATE_S:
                    return{
                        ...state,
                        data:action.cc
                    }
                    case getDateType.DIAN_JI:
                        return{
                            ...state,
                            cla:state.cla?false:true
                        }
            default:
                return state
    }
}

export default reducer