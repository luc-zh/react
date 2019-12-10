import React, {Component} from 'react';
import {NavBar, Icon,Popover} from 'antd-mobile';
import "./soutop.css"
import {Link} from "react-router-dom";

class TopHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    render() {
        const Item = Popover.Item;
        return (
            <div style={{position: "fixed", top: "0", width: "100%", zIndex: "999"}}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" color="#000"/>}
                    onLeftClick={this.props.money}
                    
                    rightContent={
                        <Popover 
                          overlay={[
                            (<Item key="4" value="scan">首页</Item>),
                            (<Item key="5" value="special" >分类</Item>),
                            (<Item key="6" value="button ct">
                              <span style={{ marginRight: 5 }}>购物车</span>
                            </Item>),
                            (<Item key="7" value="geren" >个人中心</Item>),
                          ]}
                          onSelect={this.props.onClick}
                        >
                            <Icon type="ellipsis" color="#000"/>
                        </Popover>
                      }
                >
                    <Link to="search"> <input
                        className="inpt"
                        placeholder="搜索商品"
                        maxLength={20}
                        showCancelButton={true}
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                        <span className="searchBox__clear" ></span>
                    </Link>
                </NavBar>
            </div>
        );
    }
}

export default TopHeader;