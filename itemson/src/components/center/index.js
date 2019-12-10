import React, {Component} from 'react';
import TopHeader from '../../sharedComponent/topHeader';
import "./center.css"
import Center from "./Center";
import {
    getUsername,
    getPassword,
    isLogin,
    actions as loginActions
  } from "../../store/reducers/reducerLogn";
  import { bindActionCreators } from "redux";
  import { Redirect } from "react-router-dom";
  import { connect } from "react-redux";
class WoDe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "登录注册"
        }
    }
    render() {
        const { username, password, login, location: {state} } = this.props;
    if (login) {
      if(state && state.from) {
        return <Redirect to={state.from} />
      }
      return <Redirect to="/centers" />;
    }
        return (
            <div>
                <TopHeader title={this.state.title} money={this.money.bind(this)}/>
                <Center
                  username={username}
                  password={password}
                  onChange={this.handleChange}
                  onSubmit={this.handleSubmit}
                />
            </div>);
    }
    money() {
        this.props.history.goBack()
    }
     // input元素改变的响应函数
  handleChange = e => {
    if (e.target.name === "username") {
      this.props.loginActions.setUsername(e.target.value);
    } else if (e.target.name === "password") {
      this.props.loginActions.setPassword(e.target.value);
    }
  };

  // 登录
  handleSubmit = () => {
    this.props.loginActions.login();
  };

}



const mapStateToProps = (state, props) => {
    return {
      username: getUsername(state),
      password: getPassword(state),
      login: isLogin(state)
    };
  };
  
  const mapDispatchToProps = (dispatch, props) => {
    return {
      loginActions: bindActionCreators(loginActions, dispatch)
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(WoDe);
  
// export default WoDe

