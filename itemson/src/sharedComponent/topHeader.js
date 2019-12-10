import React, {Component} from 'react';
import {NavBar, Icon,Popover} from 'antd-mobile';

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
                            (<Item key="4" value="scan" >首页</Item>),
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
                >{this.props.title}</NavBar>
            </div>
        );
    }

}

export default TopHeader;