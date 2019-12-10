import React, {Component} from 'react';
import SouHeader from "../../sharedComponent/SouHeader"
import {ListView, Flex} from 'antd-mobile';
import {Link} from "react-router-dom"
import {getDate,zongxiao,youhuo,tupian} from"../../store/reducers/reducerParticul"
import {connect} from "react-redux"
const NUM_ROWS = 20;
let pageIndex = 0;
function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}
   
class Particulars extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource,
            isLoading: true,
          
        };
    }
    componentDidMount() {
        this.props.get()
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }
    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({isLoading: true});
        setTimeout(() => {
            this.rData = {...this.rData, ...genData(++pageIndex)};
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }
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
        const {data}=this.props 
        let index = data.length - 1;
        const  row =  (rowData, sectionID, rowID) => {
            return (
                <div>
                    {data.map((item,index)=>{
                        return (
                            <div key={item.id} className={this.props.class ? "ccr" : "cct"}>
                                <Link to={`/commoditys/${item.id}`}>
                                    <div className={this.props.class ? "aar" : ""}>
                                        <div className="left" ><img src={item.url} alt="" width="134px" height="138px"/></div>
                                        <div className={this.props.class ? "right" : ""} style={{ lineHeight: 1 ,marginLeft:"10px"}} >
                                            <div className="ttt">{item.title2}</div>
                                            <div className="text" style={{marginTop:"10px" ,color:"red" }}>¥<span  style={{ fontSize: '24px', color: 'red' }}>{item.pic}</span>
                                                <div className="apps">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )
        };
        
        return (
            <div>
                <SouHeader money={this.money.bind(this)}  onClick={this.blue.bind(this)}/>
                <Flex style={{marginTop: '45px',textAlign:'center',padding:"5px"}}>
                    <Flex.Item onClick={this.props.get}>综合</Flex.Item>
                    <Flex.Item onClick={this.props.zongxiao}>销量</Flex.Item>
                    <Flex.Item onClick={this.props.youhuo}>有货</Flex.Item>
                </Flex>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={row}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached}
                    onEndReachedThreshold={10}
                />
                <div className={this.props.class?"ffs":"ffc"} onClick={this.props.tupian}></div>
            </div>
        );
    }

    money() {
        this.props.history.goBack()

    }
}

const mapStateToProps=(state)=>{
    return{
        data:state.par.data,
        class:state.par.cla
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        get(){
            dispatch(getDate())
        },
        zongxiao(){
            dispatch(zongxiao())
        },
        youhuo(){
            dispatch(youhuo())
        },
        tupian(){
            
            dispatch(tupian())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Particulars) 