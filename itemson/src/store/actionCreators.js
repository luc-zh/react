import {ADD_NUMBER, CART_NUMBER, CHE,DELETE,CHANGE_LIST, commodityType,CHECKBOX,GET_DATA2, EVENUMBER, GET_DATATO, GET_GETDATA} from "./actionTypes"
import axios from "axios"

export const homeAction = (dispatch) => {
    axios.get("/static/data/seckill.json")
        .then(res => {
            dispatch({
                type: CHANGE_LIST,
                data: res.data.img
            });
        })
};
export const cartAction = (value) => ({
    type: CART_NUMBER,
    value
})

export const addNumber = (item) => ({
    type: ADD_NUMBER,
    item
})
export const eveNumber = (item) => ({
    type: EVENUMBER,
    item 
})
export const checkbox=(item)=>({
    type:CHECKBOX,
    item
})
export const del=(id)=>({
    type:DELETE,
    id
})
export const che=(e)=>({
    type:CHE,
    e
})
export const listData = (dispatch) => {
    axios.get("/static/data/lovelife.json").then(res => {
        dispatch({
            type: GET_GETDATA,
            listDa: res.data.goodl
        });
    })
}
export const listData2 = (dispatch) => {
    axios.get("/static/data/lovelife1.json").then(res => {
        dispatch({
            type: GET_DATA2,
            listuu: res.data.goodl
        });
    })
}


export const getData = (dispatch) => {
    axios.get("/static/images/bg/bg.json")
        .then(res => {
            dispatch({
                type: commodityType.GET_DATA,
                dat: res.data.bg
            })
        })
        .then(err => console.log(err))
}


export const getDatas = (dispatch) => {
    axios.get("/static/data/lovelife.json").then((res) => {
        dispatch({
            type: commodityType.GET_DATAS,
            datas: res.data.goodl
        })
    }, function (err) {
        console.log(err)
    })

}


export const isFals = (dispatch) => {
    if (window.localStorage.getItem('data')) {
        dispatch({
            type: GET_DATATO,
            datato: JSON.parse(window.localStorage.getItem('data'))
        })
    } else {
        return []
    }
}
