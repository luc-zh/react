import React, {Component} from 'react';
import {Tabs, Flex} from 'antd-mobile';
import "./classify.css"
import axios from 'axios'
import SouHeader from "../../sharedComponent/SouHeader"
import Footer from "../foonter/Foonter";
import {Link} from "react-router-dom";

class Classify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        axios.get("/static/data/section.json")
            .then(res => {
                this.setState({
                    list: res.data.hello
                })
            })
    }

    renderContent = tab =>
        (<div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: '#fff'
        }}>
            <p> {tab.title}</p>
        </div>);
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
        const tabs = [
            {title: '热门推荐'},
            {title: '手机数码'},
            {title: '家用电器 '},
            {title: '电脑办公'},
            {title: '计生情趣'},
            {title: '美妆护肤'},
            {title: '个护清洁'},
            {title: '汽车生活'},
            {title: '男装'},
            {title: '男鞋'},
            {title: '女装'},
            {title: '女鞋'},
            {title: '酒水饮料'},
            {title: '钟表珠宝'},
            {title: '生活旅行'},
            {title: '二手商品'},

        ];

        return (
            <div>
                <div style={{position: "fixed", top: "0", width: "100%", zIndex: "999"}}>
                    <SouHeader money={this.money.bind(this)} onClick={this.blue.bind(this)}/>
                </div>
                <div style={{marginTop: "45px", marginBottom: "50px"}}>
                    <Tabs tabs={tabs}
                          initialPage={'t2'}
                          tabBarPosition="left"
                          prerenderingSiblingsNumber={1}
                          initialPage={0}
                        // swipeable={true}
                          tabBarActiveTextColor="#007aff"
                          useOnPan={true}
                           
                    >
                        {this.state.list.map((res, index) => {
                            return (
                                <div key={index} style={{
                                    width: "300px",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    backgroundColor: '#fff',
                                    overflow: "hidden"
                                }}>
                                    <div>
                                        {res.top[0].container.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <h4 style={{marginTop: "5px", marginBottom: "5px"}}>
                                                        {item.title}
                                                    </h4>
                                                    <div style={{width: "100%", boxSizing: "content-box"}}>
                                                        {
                                                            item.ul.map((res, index) => {
                                                                return (
                                                                    <div key={index} style={{
                                                                        width: " 80px",
                                                                        display: "inline-block",
                                                                        marginBottom: "10px",
                                                                        marginLeft: "15px"
                                                                    }}>
                                                                        <Link to="/particular">
                                                                            <div>
                                                                                <img src={res.url} width="80%"
                                                                                     height="80%"/>
                                                                            </div>
                                                                        </Link>
                                                                        <div style={{textAlign: "center"}}>
                                                                            {res.title}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            )
                        })}
                    </Tabs>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }

    money() {
        this.props.history.goBack()

    }
}

export default Classify;