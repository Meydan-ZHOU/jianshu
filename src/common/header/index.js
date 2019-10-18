import React,{ Component } from "react";
import { connect } from "react-redux";
import {actionCreators} from "./store"
import {actionCreators as loginActionCreators } from "../../pages/login/store"
import {Link,Redirect} from "react-router-dom";
import {CSSTransition} from "react-transition-group"
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addtion,
  Button,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from "./style"

class Header extends Component {
  getListArea(){
    const { list,page,focused,mouseIn,totalPage,handleChangePage,handleMouseEnter,handleMouseLeave } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length){
      for(let i=(page-1)*10;i<page*10;i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn){
      return (
        <SearchInfo
          onMouseEnter = {handleMouseEnter}
          onMouseLeave = {handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}
            >
              <i ref={(icon)=>{this.spinIcon = icon;}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      );
    }else{
      return null;
    }
  }
  render(){
    const {list,focused,handleInputFocus,handleInputBlur,login,handleLogout,handleLogin} = this.props;
    if(login){
      return (
        <HeaderWrapper>
          <Link to="/">
            <Logo/>
          </Link>
          <Nav>
            <NavItem className="left">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            <SearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={focused?'focused':''}
                  onFocus={()=>handleInputFocus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe7c1;</i>
              {this.getListArea()}
            </SearchWrapper>
            {
              login? <NavItem className="right" onClick={handleLogout}>退出</NavItem>:
                <Link to='/login'><NavItem className="right"  onClick={handleLogin}>登录</NavItem></Link>
            }
            <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          </Nav>
          <Addtion>
            <Button className="writting">	<i className="iconfont">&#xe615;</i> 写文章</Button>
            <Button className="reg">注册</Button>
          </Addtion>
        </HeaderWrapper>
      );
    }else{
      return <Redirect to="/login"/>
    }
  }
};

const mapStateToProps = (state)=>{
  return {
    focused:state.getIn(['header', 'focused']),
    list:state.getIn(['header', 'list']),
    page:state.getIn(['header', 'page']),
    mouseIn:state.getIn(['header', 'mouseIn']),
    totalPage:state.getIn(['header', 'totalPage']),
    login:state.getIn(["login","login"])
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    handleInputFocus(list){
      (list.size===0)&&dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/g,"");
      if(originAngle){
        originAngle = parseInt(originAngle,10);
      }else{
        originAngle = 0;
      }
      spin.style.transform = `rotate(${originAngle+360}deg)`;

      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    },
    handleLogout(){
      dispatch(loginActionCreators.changeLogin(false));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);