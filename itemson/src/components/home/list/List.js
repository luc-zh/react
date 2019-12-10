import React, {Component} from 'react';
import {ListView} from 'antd-mobile';
import "./list.css"
import axios from 'axios'
import {Link} from "react-router-dom";
const NUM_ROWS = 10;
let pageIndex = 0;

function genData(pIndex = 0) {
    if (pIndex >= 10) {
        return pIndex
    }
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

class Demo extends Component {
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource,
            isLoading: true,
            yangshi:false,
          
        };
    }

    componentDidMount() {
        this.props.funLilst()
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

    render() {
       
        const row = () => {
            return (    
               <div>
                   {
                   this.props.listDa.map((obj,index)=>{
                       return(
                        <div key={obj.id}
                        style={{width: "41%", display: "inline-block", height: "250px", padding: " 15px 15px 0"}}
                        className="odd">
                       <div>
                         <Link to={`/commodity/${obj.id}`}><div style={{width: "100%", height: "170px"}}><img
                               style={{height: '100%', textAlign: "center", width: "100%"}} src={obj.url} alt={obj.title}/>
                           </div></Link>
                           <div style={{lineHeight:1}}>
                               <p className="ttt">{obj.title2}</p>
                               <div style={{marginTop: "10px",position:"relative",color:"red"}}>¥<span
                                   style={{fontSize: '24px', color: 'red'}}>{obj.pic}</span>
                                   <span style={{color:"red",border:(obj.fang===this.state.yangshi)?"":"1px solid red",marginLeft:"5px"}}>{obj.fang?"满减":""}</span>
                                   <span style={{position:"absolute",right:"-10px",bottom:"-2px" ,border:"1px solid #ccc",padding:"2px" ,color:"rgb(115, 115, 115)"}}>看相似</span>
                                   </div>
                           </div>
                       </div>
                   </div>
                    )
                   })
                   }
               </div>
            );
        };
        return (
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{textAlign: 'center'}}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                className="am-list"
                pageSize={4}
                useBodyScroll
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
        );
    }
}

export default Demo;