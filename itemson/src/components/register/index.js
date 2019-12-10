import React, { Component } from 'react';
import TopHeader from '../../sharedComponent/topHeader';
import "../center/center.css"
import Reg from './register ';
import {connect} from "react-redux"
import { Redirect } from "react-router-dom";

import {
    getUsername,
    getPassword,
    isReg,
    actions as regActions
  } from "../../store/reducers/reducerRegister";
  import { bindActionCreators } from "redux";
class Register extends Component {
    constructor(props) {

        super(props);
        this.state = {
            title: "注册"
        }
    }
    render() { 
        const { username, password, reg, location: {state} } = this.props;
        if (reg) {
            if(state && state.from) {
              return <Redirect to={state.from} />
            }
            return <Redirect to="/yellowTab" />;
          }
        return ( 
            <div>
                 <TopHeader title={this.state.title} money={this.money.bind(this)}/>
                 <Reg
                  username={username}
                  password={password}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                 />
            </div>
         );
    }
    money() {
        this.props.history.go(-1)
    }
         // input元素改变的响应函数
  handleChange = e => {
    if (e.target.name === "username") {
      this.props.regActions.setUsername(e.target.value);
    } else if (e.target.name === "password") {
      this.props.regActions.setPassword(e.target.value);
    }
  };

  // 登录
  handleSubmit = () => {
    this.props.regActions.reg();
  };

}
const mapStateToProps = (state, props) => {
    return {
      username: getUsername(state),
      password: getPassword(state),
      reg: isReg(state)
    };
  };
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
      regActions: bindActionCreators(regActions, dispatch)
    };
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Register);
// export default Register;