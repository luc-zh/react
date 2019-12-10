import React, {Component} from 'react';
class Reg extends Component {
  
    render() {
        const {username, password, onChange, onSubmit} = this.props;
        return (
            <div>
                <div style={{height: "100%", marginTop: "48px"}}>
                    <div className="Keyline">
                        <div className="inputContainer">
                            <input type="tel" id="tss" placeholder="用户名/手机号" 
                             name="username" value={username} 
                             onChange={onChange}
                            />
                        </div>
                        <div className="inputContainer">
                            <input id="pass" placeholder="请输入密码"
                              name="password"
                              type="password"
                              value={password}
                              onChange={onChange}
                            />

                        </div>
                        <div className="resge" style={{marginTop: "20px"}}>
                            <button onClick={onSubmit}>注册</button>
                        </div>
                        <div className="footer">
                            <h4 className="txt-otherLogin">其他注册方式</h4>
                            <p className="quick-type">
                                <a className="icon-qq"/>
                                <a className=" icon-wx"/>
                            </p>
                        </div>
                        <p className="policy_tip"><span>
                        </span>注册即代表您已同意<a>隐私政策</a></p>
                    </div>
                </div>
            </div>);
    }

}

export default Reg
