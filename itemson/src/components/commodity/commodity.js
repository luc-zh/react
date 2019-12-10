import React, {Component} from "react"
import {Modal, Flex, Button,  WingBlank,Carousel, Tabs} from 'antd-mobile';

import "./commodity.css"
import {connect} from "react-redux"
import {getData, getDatas} from "../../store/actionCreators"
import TopHeader from "../../sharedComponent/topHeader"



function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
  
class Commodity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            yu: null,
            title: "详情页"

        }
    }

    componentDidMount() {
        this.props.dd()
        this.props.cc()
        this.getTimes()
    }
    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
          [key]: true,
        });
      }
      onWrapTouchStart = (e) => {
        // fix touch to scroll background page on iOS
        if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
          return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
          e.preventDefault();
        }
      }
      onClose = key => () => {
        this.fun()
        this.setState({
          [key]: false,
        });
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

    money() {
        this.props.history.goBack()
    }

    render() {
        const tabs = [
            {title: '商品介绍'},
            {title: '规格参数'},
            {title: '售后保障'},
        ];
        const imgHeight = 300
        return (
            <div>
                <div id="fanhui"></div>
                <TopHeader title={this.state.title} money={this.money.bind(this)} onClick={this.blue.bind(this)}/>
                <div style={{position: "fixed", top: "0", width: "100%", zIndex: "999"}}>

                    {/* <NavBar
                        mode="light"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => this.props.history.go(-1)}
                        rightContent={[
                            <Icon key="1" type="ellipsis"/>]}
                    >
                        <div className="topLi">
                            <ul>
                                <li><a href="javascirpt:">商品</a></li>
                                <li><a href="javascirpt:">评价</a></li>
                                <li><a href="javascirpt:">详情</a></li>
                                <li><a href="javascirpt:">推荐</a></li>
                            </ul>
                        </div>
                    </NavBar> */}
                </div>
                <div className="-tab-title" id="lt">
                    <div style={{height: "300px"}}>
                        <WingBlank>
                            <Carousel
                                autoplay={true}
                                infinite
                                style={{width: "100%", margin: "0"}}
                            >
                                <a
                                    href="http://www.alipay.com"
                                    style={{display: 'inline-block', width: '100%', height: imgHeight}}
                                >
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src0 : null}

                                        style={{width: '100%', verticalAlign: 'top', height: '300px'}}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({imgHeight: 'auto'});
                                        }}
                                    />
                                </a>

                                <a
                                    href="http://www.alipay.com"
                                    style={{display: 'inline-block', width: '100%', height: imgHeight}}
                                >
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src1 : null}

                                        style={{width: '100%', verticalAlign: 'top', height: '300px'}}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({imgHeight: 'auto'});
                                        }}
                                        alt=""
                                    />
                                </a>

                                <a
                                    href="http://www.alipay.com"
                                    style={{display: 'inline-block', width: '100%', height: imgHeight}}
                                >
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src2 : null}

                                        style={{width: '100%', verticalAlign: 'top', height: '300px'}}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({imgHeight: 'auto'});
                                        }}
                                        alt=""
                                    />
                                </a>

                                <a
                                    href="http://www.alipay.com"
                                    style={{display: 'inline-block', width: '100%', height: imgHeight}}
                                >
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src3 : null}

                                        style={{width: '100%', verticalAlign: 'top', height: '300px'}}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({imgHeight: 'auto'});
                                        }}
                                        alt=""
                                    />
                                </a>
                                <a
                                    href="http://www.alipay.com"
                                    style={{display: 'inline-block', width: '100%', height: imgHeight}}
                                >
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src3 : null}

                                        style={{width: '100%', verticalAlign: 'top', height: '300px'}}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({imgHeight: 'auto'});
                                        }}
                                        alt=""
                                    />
                                </a>


                            </Carousel></WingBlank>
                    </div>
                </div>

                <div className="warp">
                    <div className="pic">
                        {this.props.getData.length ? (
                            <div style={{display: "inline-block"}}><h2 style={{display: "inline-block", width: "60px"}}>
                                <span
                                    style={{fontSize: "13px"}}>¥</span>{this.props.getData[this.props.match.params.id].pic}
                            </h2>  <span className="s1">¥{this.props.getData[this.props.match.params.id].pic}</span>
                            </div>) : null}
                        <p style={{display: "inline-block"}}><span>降价</span><span>收藏</span></p>
                    </div>
                    {/* <div className="guangzhu">
                        <span></span> <span style={{color: "red"}}>立即关注</span>
                    </div> */}
                    <div className="text">
                        {this.props.getData.length ? (
                            <h3>{this.props.getData[this.props.match.params.id].title2}</h3>) : null}
                        {this.props.getData.length ? (
                            <span>{this.props.getData[this.props.match.params.id].title}</span>) : null}
                    </div>
                    <div className="miaosha">
                        <p><span className="bg">秒杀预告</span><span className="color">秒杀期间可享受价格优惠</span></p>
                        <h4><span className="time-picker" style={{paddingRight: "25px"}}>秒杀时间</span>
                            <span className="seckill-time j_sk_h">{this.state.hour}</span>
                            <span className="seckill-time-separator">:</span>
                            <span className="seckill-time j_sk_h">{this.state.minute}</span>
                            <span className="seckill-time-separator">:</span>
                            <span className="seckill-time j_sk_h">{this.state.second}</span>
                        </h4>
                    </div>

                    <div>
                        <div className="detail_gap"/>
                        <div className="kuang1">
                            <span className="posis">优惠</span>
                            <p className="sandian"/>
                            <div className="a">
                                <p style={{color: 'red'}}>
                                    <span>满1500减1000</span><span>满15000减2000</span><span>新用户专享</span></p>
                            </div>
                            <div className="a">
                                <p><span
                                    style={{color: 'red', border: "1px solid red", fontSize: "10px"}}>多买优惠</span><span
                                    style={{border: "none", color: "#000"}}>满1件,总价打8.50折,包邮(限中国内地)</span></p>
                            </div>
                        </div>
                        <div className="detail_gap"/>
                        <div>


                            <div>
                                <div className="kuang1">
                                    <span className="posis">已选</span>
                                    <p className="sandian"/>


                                    {this.props.getData.length ? (<div className="a">
                                        <p style={{
                                            color: "#000",
                                            fontSize: '14px'
                                        }}>{this.props.getData[this.props.match.params.id].yixuan}</p></div>) : null}
                                    <div className="a">
                                        <p>本商品支持保障服务，点击可选服务</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="kuang1">
                                    <span className="posis">送至</span>
                                    <p className="sandian"/>

                                    <div className="a">
                                        <p style={{color: '#000', fontSize: "14px"}}>北京朝阳区三环到四环之间</p>
                                    </div>
                                    <div className="a">
                                        <span style={{color: "red", marginRight: '10px'}}>现货</span><span>广东佛山</span>

                                    </div>
                                </div>
                            </div>
                            <div className="kuang1">
                                <span className="posis">服务</span>
                                <p className="sandian"/>

                                <div className="a">
                                    <p>此商品提供以下配送服务，请在确认订单页选择</p>
                                </div>
                                <div className="a">
                                    <p style={{color: '#000'}}>送货上门安装 </p>
                                </div>
                            </div>
                            <div className="kuang2">
                                <ul>
                                    <li><span className="neik"/>商家发货&售后</li>
                                    <li><span className="neik"/>7天无理由退货</li>
                                    <li><span className="neik"/>免费送装</li>
                                    <li><span className="neik"/>三年质保</li>
                                    <li><span className="neik"/>30天价保</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="detail_gap"/>

                </div>
                <div style={{margin: "0 8px"}} id="ping">
                    <div style={{borderBottom: "1px solid #ccc"}}>
                        <p className="tit">评价 <span className="haoping">好评90%</span></p><p className="gong">共 <span
                        style={{padding: "0 5px"}}>1000+</span>条</p>
                    </div>
                    <div className="neirong">
                        <div style={{margin: "10px 0"}}><span style={{marginRight: "240px"}}>123444</span><p
                            className="xing"/><p className="xing"/><p className="xing"/><p className="xing"/><p
                            className="xing"/></div>
                        <div>高低床很好，很有档次，漆面很漂亮！安装人员也很负责！客服人也很好！态度得好。有问必答。下次还到你家买东西。</div>
                    </div>
                </div>
                <div className="footers" id="xinag">
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}

                    >
                        <div style={{

                            height: '100%',
                            backgroundColor: '#fff'
                        }}>

                            <div style={{marginTop: '10px'}}>

                                <div style={{fontSize: "0"}}>
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src0 : null}
                                        width="100%" height="100%"/>
                                </div>
                                <div style={{fontSize: "0"}}>
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src1 : null}
                                        width="100%" height="100%"/>
                                </div>
                                <div style={{fontSize: "0"}}>
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src2 : null}
                                        width="100%" height="100%"/>
                                </div>
                                <div style={{fontSize: "0"}}>
                                    <img
                                        src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src3 : null}
                                        width="100%" height="100%"/>
                                </div>

                            </div>
                        </div>
                        <div style={{


                            height: '500px',
                            backgroundColor: '#fff'
                        }}>
                            <div className="am-grid-icon detail_item p_prop mod_tit_line">
                                <table cellPadding="0" cellSpacing="1" width="100%" border="0"
                                       className="Ptable param_table">
                                    <tbody>
                                    <tr>
                                        <td>商品编号</td>
                                        <td>31765586397</td>
                                    </tr>
                                    </tbody>
                                    <tbody>
                                    <tr>
                                        <th className="tdTitle" colSpan="2">主体</th>
                                    </tr>
                                    <tr>
                                        <td className="tdTitle">产品净重（kg）</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td className="tdTitle">组立尺寸（cm）</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td className="tdTitle">包装尺寸（cm）</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td className="tdTitle">商品承重（kg）</td>
                                        <td>0</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div style={{
                            height: '500px',
                            backgroundColor: '#fff'
                        }} className="shouhou">
                            <div>本产品全国联保，享受三包服务，质保期为：三年质保</div>
                            <div><h3>权利声明</h3></div>
                            <div>
                                京东商城上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东商城重要的经营资源，未经许可，禁止非法转载使用。
                            </div>
                            <div><h3>价格说明</h3></div>
                            <div><strong>1.京东价：</strong>京东价为商品的销售价，是您最终决定是否购买商品的依据。</div>
                            <div><strong>2.划线价：</strong>商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在京东平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
                            </div>
                            <div><strong>3.折扣：</strong>如无特殊说明，折扣指销售商在原价、或划线价（如品牌专柜标价、商品吊牌价、厂商指导价、厂商建议零售价）等某一价格基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。
                            </div>
                            <div><strong>4.异常问题：</strong>商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
                            </div>
                        </div>
                    </Tabs>
                </div>
                <div>
                    <div className="comFooter">
                        <ul>
                            <li>
                                <p className="tu1"/>
                                <span className="footerSize">联系客户</span>
                            </li>
                            <li>
                                <p className="tu2"/>
                                <span className="footerSize">进店</span>
                            </li>
                            <li>
                                <p className="tu3"/>
                                <span className="footerSize">
                                    购物车</span>
                            </li>
                            <li className="jia">
                             <Button  onClick={this.showModal('modal2')}>加入购物车</Button>
                             </li>
                            <li className="liji"><span >立即购买</span></li>
                        </ul>
                    </div>
                </div>
               
                <div>
                    <a className="feldx" href="#fanhui"/>
                </div>
                <div>
               
               <WingBlank>
       <Modal
         popup
         visible={this.state.modal2}
         animationType="slide-up"
         onClose={this.onClose('modal2')}
       >
           <div style={{width:"100%",height:"350px",background:"#FFf",position:"relative"}}>
            <div style={{height:"120px",width:"130px"}}>
                <img src={this.props.getData.length ? this.props.getData[this.props.match.params.id].src2 : null} alt="" width="100%" height="100%"/></div>
                {this.props.getData.length ? (
                            <span style={{position:"absolute" ,right:"17px",top:"31px",width:"200px"}}>{this.props.getData[this.props.match.params.id].xiao}</span>) : null}       
            <div className="yanse">
                <p>颜色</p>
                <ul className='dianji' >
                    <li>魅海蓝</li>
                    <li style={{background:"red",color:"#fff"}}>幻夜黑</li>
                    <li>魅丽红</li>
                    <li>幻影蓝</li>
                    <li>幻影红</li>
                </ul>
            </div>
            <div className="xinghao">
                <p>型号</p>
                <ul>
                    <li  style={{background:"red",color:"#fff"}}>全网通8G+28G</li>
                    <li>全网通6G+28G</li>
                   
                </ul>
            </div>
            </div>
          <Flex>
              <Flex.Item> <Button  style={{background:"linear-gradient(138deg,#ffa600,#ffb000 77%,#ffbc00)",color:"#FFf"}} onClick={this.onClose('modal2')}>加入购物车</Button></Flex.Item>
              <Flex.Item> <Button  style={{background:" linear-gradient(-41deg,#ff4f18,#ff2000 24%,#f10000)",color:"#FFf"}}>立即购买</Button></Flex.Item>
          </Flex>
       </Modal>
     </WingBlank>
               </div>
            </div>
        )
    }
        tt(i){
                console.log(i)
        }
    fun() {
        if (this.props.getData.length) {
            //   console.log(this.props.match.params.id);
            var tt = []
            var ar = this.props.getData[this.props.match.params.id]
            console.log(ar.num);
            tt.push(ar)
            // window.localStorage.setItem("data",JSON.stringify(tt))
            // var tr=JSON.parse(window.localStorage.getItem('data'))
            // tr.map(item=>{
            //     if (item.id ===this.props.match.params.id) {
            //         item.num += ar.num
            //     }
            // })
            if (window.localStorage.getItem("data")) {
                var bool = false
                var i = null
                var tr = JSON.parse(window.localStorage.getItem('data'))
                tr.map((item, index) => {
                    if (item.id == this.props.match.params.id) {
                        bool = true
                        i = index
                        return
                    }
                })
                if (bool) {
                    tr[i].num += ar.num
                    console.log(666);
                } else {
                    tr.push(ar)
                }
                window.localStorage.setItem("data", JSON.stringify(tr))
                // window.localStorage.getItem("data")
            } else {
                window.localStorage.setItem("data", JSON.stringify(tt))
            }

        }

    }

    getTimes = () => {
        setInterval(() => {
            let oDate = new Date()
            let date2 = null
            if (oDate.getHours() % 2 === 0) {
                date2 = new Date(oDate.getFullYear(), oDate.getMonth(), oDate.getDate(), oDate.getHours() + 2, 0, 0)
            } else {
                date2 = new Date(oDate.getFullYear(), oDate.getMonth(), oDate.getDate(), oDate.getHours() + 1, 0, 0)
            }
            let chazhi = date2 - oDate
            let s = parseInt(chazhi / 1000 % 60)
            let m = parseInt(chazhi / 1000 / 60 % 60)
            let h = parseInt(chazhi / 1000 / 60 / 60 % 24)
            let hour = `0${h}`
            let minute = m > 9 ? m : `0${m}`
            let second = s > 9 ? s : `0${s}`

            this.setState({
                hour: hour,
                second: second
                , minute: minute
            })

        }, 1000)

    }
}

const mapStateToProps = (state) => {
    return {

        getData: state.com.data2
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dd() {
            dispatch(getData)
        }
        ,
        cc() {
            dispatch(getDatas)

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Commodity)