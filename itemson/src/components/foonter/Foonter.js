import React, {Component} from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import "./footer.css";
import {TabBar} from 'antd-mobile';
import {withRouter} from 'react-router-dom'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: window.location.href.split("/")[3],
            hidden: false,
        }
    }

    componentWillUpdate(nextProps, nextState) {

        // console.log(nextState.selectedTab)
        //
        // console.log(this.state.selectedTab);

        if (nextState.selectedTab === window.location.href.split("/")[3]) {
            return;
        } else {

            this.setState({
                selectedTab: window.location.href.split("/")[3]
            })
        }


        // console.log(window.location.href.split("/")[3]);

    }

    render() {
        return (
            <div>
                <div>

                </div>
                <div style={{position: 'fixed', height: '7%', width: '100%', bottom: 0, zIndex: 999}}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="主页"
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(/static/icon/shouye.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(/static/icon/shouye2.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'blueTab',

                                });
                                this.props.history.push("/blueTab");
                                //  console.log(window.history)
                            }}
                            data-seed="logId"
                        >

                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(/static/icon/fenlei.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(/static/icon/fenlei2.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="分类"
                            key="Koubei"

                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'redTab',
                                });

                                this.props.history.push("/redTab");
                            }}
                            data-seed="logId1"
                        >

                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(/static/icon/gouwu.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(/static/icon/gouwu2.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="购物车"
                            key="Friend"
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                                this.props.history.push("/greenTab");

                            }}
                        >

                        </TabBar.Item>
                        <TabBar.Item
                            icon={{uri: '/static/icon/geren.svg'}}
                            selectedIcon={{uri: '/static/icon/geren2.svg'}}
                            title="我的"
                            key="my"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                                this.props.history.push("/yellowTab");
                                console.log(this.props.history)

                            }}
                        >
                        </TabBar.Item>
                    </TabBar>
                </div>
            </div>
        );
    }
}

export default withRouter(Footer);