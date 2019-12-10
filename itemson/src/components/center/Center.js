import React, {Component} from 'react';
import "./center.css"
import {Link} from "react-router-dom";
class Center extends Component {
    render() {
        const {username, password, onChange, onSubmit} = this.props;

        return (
            <div>
                <div style={{height: "100%", marginTop: "48px"}}>
                    <div className="Keyline">
                        <form>
                            <div className="inputContainer">
                                <input type="tel" id="tss" placeholder="用户名/手机号"
                                       name="username" value={username} 
                                       onChange={onChange}
                                />
                            </div>
                            <div className="inputContainer">
                                <input id="pass" placeholder="请输入密码"   name="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={onChange}
                                      />

                            </div>
                        </form>
                        <div className="logon">
                            <button onClick={onSubmit}>登录</button>
                        </div>
                        <div className="resge">
                            <Link to="register">
                                <button>注册</button>
                            </Link>
                        </div>
                        <div className="footer">
                            <h4 className="txt-otherLogin">其他登录方式</h4>
                            <p className="quick-type">
                                <a className="icon-qq"></a>
                                <a className=" icon-wx"></a>
                            </p>
                        </div>
                        <p className="policy_tip"><span>
                        </span>登录即代表您已同意<a>隐私政策</a></p>
                    </div>
                </div>
            </div>);
    }

}
export  default  Center