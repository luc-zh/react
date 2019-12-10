import React, {Component} from 'react';
import {Flex, WingBlank, Carousel, Grid} from 'antd-mobile';
import "./home.css"
import List from "./list/List"
import Header from "../../sharedComponent/header"
import Lunbo from '../../sharedComponent/lunbo'
import {homeAction,listData} from '../../store/actionCreators'
import {connect} from "react-redux"
import Footer from "../foonter/Foonter";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.changelist()
       
    }
    render() {
        const GridData = [
            {
                icon: '/static/images/grid/nav0.png',
                text: '超市'
            },
            {
                icon: '/static/images/grid/nav1.png',
                text: '进口'
            },
            {
                icon: '/static/images/grid/nav2.png',
                text: '潮流'
            }, {
                icon: '/static/images/grid/nav3.png',
                text: '生鲜'
            },
            {
                icon: '/static/images/grid/nav4.png',
                text: '服务'
            },
            {
                icon: '/static/images/grid/nav5.png',
                text: '充值'
            }, {
                icon: '/static/images/grid/nav6.png',
                text: '分期'
            },
            {
                icon: '/static/images/grid/nav7.png',
                text: '领券'
            },
            {
                icon: '/static/images/grid/nav8.png',
                text: '快递'
            },
            {
                icon: '/static/images/grid/nav9.png',
                text: '金豆'
            }
        ]
    
        const imgHeight = 160
        let data = ['1', '2', '3']
        return (

            <div style={{marginBottom: "48px"}}>
                <div className="topBg">
                    <div className="fixed">
                        <Header/>
                    </div>
                    <div className="lunbotu">
                        <WingBlank>
                            <Carousel
                                autoplay={true}
                                infinite
                                style={{marginTop: '20px'}}
                            >
                                {data.map(val => (
                                    <a
                                        key={val}
                                        href="http://www.alipay.com"
                                        style={{display: 'inline-block', width: '100%', height: imgHeight}}
                                    >
                                        <img
                                            src={`/static/${val}.jpg.dpg`}
                                            alt=""
                                            style={{width: '100%', verticalAlign: 'top', height: '100%'}}
                                            onLoad={() => {
                                                // fire window resize event to change height
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({imgHeight: 'auto'});
                                            }}
                                        />
                                    </a>
                                ))}
                            </Carousel></WingBlank>
                    </div>
                </div>
                <div className="buleBg radius">
                    <Grid data={GridData} activeStyle={false} hasLine={false} columnNum={5} onClick={(e) => {
                        console.log(e)
                    }}/>
                </div>
                <Lunbo/>
                <div className="buleBg">


                    <Flex className="advertising">
                        <Flex.Item>
                            <img src="/static/xin.jpg.dpg" width="100%" height="100%" alt=" " className="img1"/>
                        </Flex.Item>
                        <Flex.Item>
                            <img src="/static/xin2.jpg.dpg" width="100%" height="100%" alt=" " className="img2"/>
                        </Flex.Item>
                    </Flex>
                </div>
                {/*  */}
                <div className="buleBg">
                    <Flex className="advertising2">
                        <Flex.Item><img src="/static/01.jpg.dpg" width="100%" height="100%" alt=" " className="leftTu"/></Flex.Item>
                        <Flex.Item><img src="/static/02.jpg.dpg" width="100%" height="100%" alt=" "/></Flex.Item>
                        <Flex.Item><img src="/static/03.jpg.dpg" width="100%" height="100%" alt=" "
                                        className="rightTu"/></Flex.Item>
                    </Flex>
                </div>
                {/*  */}
                <div className="buleBg">
                    <div>
                        <img src="/static/zouxin.jpg.dpg" alt=" " width="100%" height="100%"/>
                    </div>
                    <Flex className="advertising3">
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute", top: "3px",
                                        textAlign: "center", width: "100%", fontWeight: '700', color: "#fff"
                                    }}>女鞋</p>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "3px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/xie.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "24%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang1.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute", top: "3px",
                                        textAlign: "center", width: "100%", fontWeight: '700', color: "#fff"
                                    }}>护肤</p>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "3px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/hufu.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "24%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang2.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute", top: "3px",
                                        textAlign: "center", width: "100%", fontWeight: '700', color: "#fff"
                                    }}>手机</p>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "3px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/shouji.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "24%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang3.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute", top: "3px",
                                        textAlign: "center", width: "100%", fontWeight: '700', color: "#fff"
                                    }}>耳机</p>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "3px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "24%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang4.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                </div>
                {/*  */}
                <div className="buleBg">
                    <div>
                        <img src="/static/meiri.jpg.dpg" alt=" " width="100%" height="100%"/>
                    </div>
                    <Flex className="advertising3">
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji2.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji3.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji4.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji5.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Flex className="advertising3">
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji2.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji4.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>
                    <Flex className="advertising3">
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/2.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji5.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji2.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div style={{position: "relative"}}>
                                <div>
                                    <p style={{
                                        position: "absolute",
                                        bottom: "9px",
                                        textAlign: "center",
                                        width: "100%",
                                        fontWeight: '700',
                                        color: "#fff",
                                        fontSize: "16px"
                                    }}>热卖商品</p>
                                    <img src="static/erji3.jpg.dpg" alt=" " style={{
                                        position: "absolute",
                                        left: "8%",
                                        bottom: "41%",
                                        width: "82%",
                                        height: "55%"
                                    }}/>
                                    <img src="/static/kuang01.jpg.dpg" alt=" "/>
                                </div>
                            </div>
                        </Flex.Item>
                    </Flex>

                </div>
                {/*  */}
                <div className="buleBg">
                    <div>
                        <img src="/static/meiri.jpg.dpg" alt=" " width="100%" height="100%"/>
                    </div>
                    <div className="gridBg">
                        <Flex className="topRadius1">
                            {
                                this.props.listdata.map((item, index) => {
                                    return (
                                        <Flex.Item className="diamonds " key={index} width="25%">
                                            <div className='textFonst'><p
                                                style={{color: "transparent"}}>{item.title}</p></div>
                                            <div style={{fontSize: "13px"}}>{item.class}</div>
                                            <img src={item.url} width="60px" height="60px" style={{marginTop: "5px"}}/>
                                        </Flex.Item>
                                    )
                                })
                            }
                        </Flex>
                        <Flex className="topRadius2">
                            {
                                this.props.listdata.map((item, index) => {
                                    return (
                                   <Flex.Item className="diamonds " key={index} width="25%">
                                               <div className='textFonst'><p
                                                style={{color: "transparent"}}>{item.title}</p></div>
                                            <div style={{fontSize: "13px"}}>{item.class}</div>
                                            <img src={item.url} width="60px" height="60px" style={{marginTop: "5px"}}/>
                                        </Flex.Item>
                                    )
                                })
                            }
                        </Flex>
                    </div>
                </div>
                {/*  */}
                <div className="buleBg">
                    <WingBlank>
                        <Carousel className="my-carousel"
                                  vertical
                                  dots={false}
                                  dragging={false}
                                  swiping={false}
                                  autoplay
                                  infinite
                        >
                            <div className="v-item">来呀来呀来呀!!!!!!!!!!!</div>
                            <div className="v-item">再看剁手再看剁手再看剁手</div>
                            <div className="v-item">快走快走快走快走!!!!!!</div>
                        </Carousel>
                    </WingBlank>
                </div>
                {/*  */}
                <div className="ulLis buleBg">
                    <div style={{marginLeft: "8px", marginRight: "8px"}}>
                        <div><img src="/static/weini.png" alt=" " width="100%" height="100%" style={{fontSize: "0"}}/>
                        </div>
                        <List funLilst={this.props.listData} listDa={this.props.sss}></List>
                    </div>
                </div>
                {/*  */}
                <div>
                    <Flex>
                        <Flex.Item style={{textAlign: "center"}}>登录</Flex.Item>|
                        <Flex.Item style={{textAlign: "center"}}>注册</Flex.Item>|
                        <Flex.Item style={{textAlign: "center"}}>客户端</Flex.Item>|
                        <Flex.Item style={{textAlign: "center"}}>返回顶部</Flex.Item>
                    </Flex>
                </div>
                <Footer/>
            </div>

        );
    }
   
}

const mapStateToProps = (state) => {
    return {
        listdata: state.home.list,
        sss:state.home.listDa
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changelist() {
            dispatch(homeAction)
        },
        listData(){
            dispatch(listData)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);