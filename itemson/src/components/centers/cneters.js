import React, {Component} from 'react';
import "./centers.css"
import TopHeader from "../../sharedComponent/topHeader";
import List from "../home/list/List"
import Footer from "../foonter/Foonter";
import {connect} from "react-redux"
import { bindActionCreators } from "redux";
import {listData} from '../../store/actionCreators'
import {
    actions as loginActions
  } from "../../store/reducers/reducerLogn";
// import {logout} from "../../store/reducers/reducerLogn"
class Centers extends Component {
    blue(i){
        if(i.key==="4"){
            this.props.history.push("/blueTab")
        }else if(i.key==="5"){
         this.props.history.push("/redTab")
     
        }else if(i.key==="6"){this.props.history.push("/greenTab")}else{
             this.props.history.push("/centers") &&  this.props.history.push("/yellowTab")
        }
     }
    render() {
        const title="个人中心"
        return (
            <div style={{background: "#f6f6f6"}}>
                <div>
                    <TopHeader  money={this.money.bind(this)}  title={title} onClick={this.blue.bind(this)} />
                </div>
                <div className="header_con">
                    <div className="avatar">
                        <div className="image" onClick={this.zhuxiao.bind(this)}>
                            <img src="/static/erji3.jpg.dpg" alt="" width="100%" height="100%"/>
                        </div>
                    </div>
                    <div className="personal_wrap">
                        <div className="name_wrap"><span
                                                             className="my_header_name">{this.props.user}</span>
                            <span
                                className="my_header_name_edit">

                        </span>
                            <div className="vip v4">

                            </div>
                        </div>
                        <div className="pin">
                            <div>用户名6530a55e47550</div>
                        </div>
                        <div className="hor-tips">
                            <div className="notice">值8017</div>
                            <div className="notice arrow">信用96.9</div>
                        </div>
                    </div>
                </div>
                <div style={{margin: "20px 0", background: "#fff"}}>
                    <div className="rel_container">
                        <div className="top_line_box">
                            <div
                                className="my_order_entrance type_unpay">
                                <div className="entrance_text">待付款</div>
                            </div>
                            <div
                                className="my_order_entrance type_consult">
                                <div className="entrance_text">待收货</div>
                            </div>

                            <div className="my_order_entrance type_consult">
                                <div className="entrance_text">退换／售后</div>
                            </div>
                            <div
                                className="my_order_entrance type_orders">
                                <div className="entrance_text">
                                    <div className="">全部订单</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{margin: "20px 0", background: "#fff"}}>
                    <div className="rel_container">
                        <div className="top_line_box">
                            <div
                                className="my_order_entrance2 ">
                                0张
                                <div className="entrance_text">金券</div>
                            </div>
                            <div
                                className="my_order_entrance2 ">
                                00.00元
                                <div className="entrance_text">本月待还</div>
                            </div>

                            <div className="my_order_entrance2 ">
                                10000个
                                <div className="entrance_text">豆豆</div>
                            </div>
                            <div
                                className="my_order_entrance2 ">
                                0元
                                <div className="entrance_text  zzz">
                                    <div className="">我的资产</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{margin: "20px 0", background: "#fff"}}>
                    <div className="rel_container">
                        <div className="top_line_box">

                            <div
                                className="my_order_entrance3 ">
                                3
                                <div className="entrance_text">商品收藏</div>
                            </div>

                            <div className="my_order_entrance3 ">
                                8
                                <div className="entrance_text">店铺收藏</div>
                            </div>
                            <div
                                className="my_order_entrance3 ">
                                6
                                <div className="entrance_text">
                                    <div className="">我的足迹</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{background: "#fff"}}>
                    <div className="rel_container">
                        <div className="top_line_box">

                            <div
                                className="my_order_entrance4 y1">

                                <div className="entrance_text">我的预约</div>
                            </div>

                            <div className="my_order_entrance4 y2">

                                <div className="entrance_text">火车票</div>
                            </div>
                            <div
                                className="my_order_entrance4 y3">

                                <div className="entrance_text">
                                    <div className="">应用推荐</div>
                                </div>

                            </div>
                            <div
                                className="my_order_entrance4 y4">

                                <div className="entrance_text">
                                    <div className="">用户福利</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginBottom: "20px", background: "#fff"}}>
                    <div className="rel_container">
                        <div className="top_line_box">

                            <div
                                className="my_order_entrance4 y5">

                                <div className="entrance_text">机票</div>
                            </div>

                            <div className="my_order_entrance4 y6">

                                <div className="entrance_text">酒店</div>
                            </div>
                            <div
                                className="my_order_entrance4 ">

                                <div className="entrance_text">
                                    <div className=""/>
                                </div>

                            </div>
                            <div
                                className="my_order_entrance4">

                                <div className="entrance_text">
                                    <div className=""/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{textAlign: "center", fontSize: "13px", color: "#ccc", marginBottom: "20px"}}>
                    -------------为你推荐 -------------
                </div>
                <div>
                <List  funLilst={this.props.listData} listDa={this.props.sss}/>

                </div>
                <div>
                    <Footer/>
                </div>
                {/*<div className="fff" >注销</div>*/}
            </div>
        )
    }

    money() {
        this.props.history.goBack()
    }
    zhuxiao(){

        this.props.loginActions.logout();
    }
   
}
const mapStateToProps=(state,props)=>{
   return{
    user:state.logn.user,
    sss:state.home.listDa
   }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        loginActions: bindActionCreators(loginActions, dispatch)
        ,
        listData(){
            dispatch(listData)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Centers);

// export default Centers