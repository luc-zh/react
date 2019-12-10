import React, {Component} from 'react';
import TopHeader from '../../sharedComponent/topHeader';
import Lunbo from "../../sharedComponent/lunbo"
import { Checkbox } from 'antd-mobile';
import {Link} from "react-router-dom";
import "./cart.css"
import List from "../../components/home/list/List"
import {connect} from "react-redux"
import {addNumber, cartAction,del, che,eveNumber, isFals, listData,checkbox,zongjian} from "../../store/actionCreators";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: null,
            second: null,
            minute: null,
            panduan: false,
            filterArr:[],
            sum:0
        }
        this.sumHandler=this.sumHandler.bind(this)

    }

    componentWillMount() {
        this.props.listData()
        this.props.getd()
        this.isFals()
    }
    sumHandler(){
        let a = 0
        this.state.filterArr= this.props.arrDate.filter(item=>item.checked===true)
        this.state.filterArr.map(item=>{
            a += item.num * item.pic
        })
        return a
    }
    
    blue(i) {
        if (i.key === "4") {
            this.props.history.push("/blueTab")
        } else if (i.key === "5") {
            this.props.history.push("/redTab")

        } else if (i.key === "6") {
            this.props.history.push("/greenTab")
        } else {
            this.props.history.push("/centers") && this.props.history.push("/yellowTab")
        }
    }

    render() {
       
       
        
        // console.log(this.state.filterArr);
        // this.setState({
        //     filterArr:this.props.arrDate.filter(item=>item.checked==true),
        //     sum:this.state.filterArr.map(item=>{
        //         item.num*item.pic
        //     })
        // })
        return (
            <div style={{backgroundColor: "#cccccc38", height: "100%"}}>
                <TopHeader title={this.props.title} money={this.money.bind(this)} onClick={this.blue.bind(this)}/>
                <div style={{marginTop: "46px"}}/>
                {this.state.panduan ?this.props.arrDate.map((item, index) => {

                        return (
                            <div style={{height: "150px", background: "#fff", marginBottom: "20px"}} key={index}>
                                <div style={{marginLeft: "8px", marginRight: "8px"}}>
                                    <div className="imgs">
                                        <Checkbox  checked={item.checked} onChange={this.props.checkbox.bind(this,item)}/>
                                        <img src={item.src0} alt="" width="80px" height="80px"/>
                                    </div>
                                    <div className="tetie">
                                        <div className="ttc">{item.title2}
                                        </div>
                                        <div className="ttb">{item.title}
                                        </div>
                                        <div className="shijian">
                                            <span className="clor"
                                                  style={{
                                                      padding: " 5px",
                                                      fontSize: "20px",
                                                      marginLeft: "20px"
                                                  }}>  <span
                                                style={{fontSize: "14px"}}>¥</span>{item.pic}</span>
                                            <p>
                                                <span className="eve" onClick={this.props.eve.bind(this,item)}>-</span>
                                                <input type="number" disabled value={item.num}
                                                       onChange={this.props.inpuValue}/>
                                                <span className="add" onClick={this.props.add.bind(this, item)}>+</span>
                                                  <span className="shanchu" onClick={this.props.del.bind(this,item.id)}>删除</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                    : (
                        <div style={{height: "300px", background: "#fff", marginBottom: "20px"}}>
                            <div className="topCenter">
                                <div>
                                    <span>登录后可同步账户购物车中的商品</span>
                                    <Link to="/yellowTab">
                                        <button>登录</button>
                                    </Link>
                                </div>
                                <div className="zhongxin">

                                    <div><img src="/static/che.png" width="100px" height="100px"/></div>
                                    <p>登录后可同步购物车商品</p>
                                </div>
                            </div>
                        </div>
                    )}


                <hr style={{marginBottom: "10px"}}/>
                <div style={{background: "#fff", marginLeft: "8px", marginTop: "10px"}}>
                    <Lunbo/>
                </div>
                <div className="xinren">
                    <div><span>新用户福利.专属优惠礼包</span>
                        <button>一键领取</button>
                    </div>
                    <div><img src="/static/youhuijian.png" alt=""/></div>
                </div>
                <div style={{
                    textAlign: 'center',
                    marginBottom: "20px",
                    color: "#ccc",
                    fontSize: "13px"
                }}>--------------可能你还想要--------------
                </div>
                <div>
                    <List funLilst={this.props.listData} listDa={this.props.sss}/>
                </div>
                <div>
                    {this.state.panduan ?
                 <div style={{height:"50px",width:"100%",background:"#fff",position:"fixed",bottom:"0",zIndex:"999"}}>
                     <span style={{position:"absolute",left:"0",width:"100px",height:"50px",display:"inline-block",textAlign:"center",lineHeight:"50px"}}><Checkbox className="checkox"  onChange={this.props.che}/>全选</span>
                 <span style={{position:"absolute",right:"100px",width:"100px",height:"50px",display:"inline-block",textAlign:"center",lineHeight:"50px",fontSize:"25px",fontWeight:"700"}}><span style={{color:"red",fontSize:"16px",marginRight:"10px"}}>¥</span>{ this.sumHandler()}</span>
                 <span style={{position:"absolute",right:"0",width:"100px",height:"50px",background:"red",display:"inline-block",textAlign:"center",lineHeight:"50px",fontSize:"25px",color:"#fff",fontWeight:"700"}}>结算</span>
                 </div>:
                 null    
                }
           
                </div>
            </div>
        );

    }
    // shanchu(id){
    //     var del=JSON.parse(window.localStorage.getItem("data"))
    //     del.splice(id,1)
    //     console.log(del)
    // }
    isFals() {
        this.setState({
            panduan: window.localStorage.getItem('login'),

        })
    }

    money() {
        this.props.history.goBack()
    }

}

const mapStateToProps = (state) => {
    return {
        arrDate: state.cart.arrDate,
        title: state.cart.title,
        sss: state.home.listDa,
        checked:state.cart.checked,
        zongjian:state.cart.zongjian,
        meihang:state.cart.meihang
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        inpuValue() {
            dispatch(cartAction())
        },
        add(item) {
            dispatch(addNumber(item))
        },
        eve(item) {
            dispatch(eveNumber(item))
        },
        getd() {
            dispatch(isFals)
        },
        listData() {
            dispatch(listData)
        },
        checkbox(item){
            dispatch(checkbox(item))
        },
        del(id){
            dispatch(del(id))
        },
        che(e){
            dispatch(che(e))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)