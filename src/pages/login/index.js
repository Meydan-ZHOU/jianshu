import React,{Component} from "react";
import {connect} from "react-redux";
import {LoginWrapper,LoginBox,LogoWrapper,InputWrapper,Input,LoginTitle,Button,Addition} from "./style"
import {actionCreators} from "./store"
import {Redirect} from "react-router-dom"

class Login extends Component {
  render(){
    const {handleLogin,loginStatus} = this.props;
    if(!loginStatus){
      return (
        <LoginWrapper>
          <LogoWrapper>
            <img className="logo-pic" src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
          </LogoWrapper>
          <LoginBox>
            <LoginTitle>
              <a href="/" className="active">登录</a>
              <b>·</b>
              <a href="/" >注册</a>
            </LoginTitle>
            <InputWrapper>
              <i className="iconfont">&#xf12b;</i>
              <Input placeholder="手机号或邮箱" className="account"/>
            </InputWrapper>
            <InputWrapper>
              <i className="iconfont">&#xe61b;</i>
              <Input placeholder="密码" className="password"/>
            </InputWrapper>
            <Addition>
              <span className="remember"><input type="checkbox"  />记住我</span>
              <span className="question">登录遇到问题?</span>
            </Addition>
            <Button onClick={handleLogin}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else{
      return <Redirect to="/" />
    }
  }
}
const mapStateToProps = (state)=>{
  return {
    loginStatus:state.getIn(['login','login'])
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    handleLogin(){
      dispatch(actionCreators.login())
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Login);