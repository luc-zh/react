import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Flex, NavBar, SearchBar} from 'antd-mobile';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fang: false,
            a:false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.deng()
      
    }

    render() {
        return (
            <div>
                <Flex className="souBg" style={{background: this.state.fang ? "#2929ad" : "transparent"}}>
                    <div className="leftImg">
                        <Link to="/redTab"> <span></span></Link>
                    </div>
                    <Flex.Item>
                        <Link to="search"> <input
                            style={{background: "#fff"}}
                            className="inpt"
                            placeholder="搜索商品"
                            maxLength={20}
                            showCancelButton={true}
                        /></Link>
                    </Flex.Item>
                    <div className="rightText">
        <Link to="/yellowTab">{this.state.a?<span style={{width:"30px",height:"30px",marginTop:"10px"}}><img src="/static/erji3.jpg.dpg" alt="" width="100%" height="100%" style={{borderRadius:"50%"}}/ ></span>:<span>登录</span>}</Link>
                    </div>
                </Flex>
            </div>
        );
    }

    handleScroll() {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop > 17) {
            this.setState({
                fang: true
            })
        } else {
            this.setState({
                fang: false
            })
        }
    }
    deng(){
        this.setState({
            a:window.localStorage.getItem("login")
        })
    }
}

export default Header;