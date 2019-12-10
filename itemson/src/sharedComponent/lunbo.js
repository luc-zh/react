import React, {Component} from 'react';
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import axios from 'axios'

class Lunbo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            hour:null,
            second:null,
            minute:null
        }
    }

    componentDidMount() {
        this.getTimes()
        new Swiper('.swiper-container', {
            paginationClickable: true,
            slidesPerView: 4,
            spaceBetween: 50,
        });

        axios.get("/static/data/seckills.json")
            .then(res => {
                this.setState({
                    list: res.data.img
                })

            })
         
    }

    render() {
        return (
            <div style={{
                margin: "0 8px",
                height: "200px",
                background: "#fff",
                overflow: "hidden",
                position: "relative"
            }}>
                <div className="miao"><h2 style={{display: "inline-block"}}>秒杀专区</h2> <h3 style={{display:'inline-block' ,height:"40px",lineHeight:"40px"}}>
                    <span className="seckill-time j_sk_h">{this.state.hour}</span>
                    <span className="seckill-time-separator">:</span>
                    <span className="seckill-time j_sk_h">{this.state.minute}</span>
                    <span className="seckill-time-separator">:</span>
                    <span className="seckill-time j_sk_h">{this.state.second}</span>
                    </h3>
                     <span
                    style={{marginLeft: "100px", color: "red", fontSize: "13px"}}>更多秒杀</span> <span className="dd"/>
                </div>
                <div className="sidesMargin">
                    <div className="swiper-container">
                        <       div className="swiper-wrapper">
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index} style={{position: "relative"}}>
                                            <img src={item.url} width="100%" height="80px"/>
                                            <div className="ptext">
                                                <p className="oldprice">{item.oldprice}</p>
                                                <p className="newprice">{item.newprice}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
   
    getTimes=()=>{
    setInterval(()=>{
        let oDate=new Date()
        let date2=null
        if (oDate.getHours()%2===0){
            date2=new Date(oDate.getFullYear(),oDate.getMonth(),oDate.getDate(),oDate.getHours()+2,0,0)
        }else{
            date2=new Date(oDate.getFullYear(),oDate.getMonth(),oDate.getDate(),oDate.getHours()+1,0,0)
        }
            let chazhi=date2-oDate
            let s=parseInt(chazhi/1000%60)
            let m=parseInt(chazhi/1000/60%60)
            let h=parseInt(chazhi/1000/60/60%24)
            let hour=`0${h}`
            let minute=m>9?m:`0${m}`
            let second=s>9?s:`0${s}`
        
            this.setState({
                hour:hour,
                second:second
                ,minute:minute
            })

        },1000)
           
    }
   
}

export default Lunbo;