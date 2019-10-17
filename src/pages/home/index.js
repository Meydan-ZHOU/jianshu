import React,{Component} from "react"
import {connect} from "react-redux";
import {actionCreators} from "./store"
import Topic from "./components/Topic"
import List from "./components/List"
import Recommend from "./components/Recommend"
import Writer from "./components/Writer"

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from "./style";


class Home extends Component {
  handleScrollTop(){
    window.scrollTo(0,0);
  }

  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src="https://upload-images.jianshu.io/upload_images/6576223-2f6d3ca3b4599889?imageMogr2/auto-orient/strip|imageView2/2/w/930/format/webp" />
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        <BackTop className={this.props.showScroll?'show':'hidden'} onClick={this.handleScrollTop}>顶部</BackTop>
      </HomeWrapper>
    );
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow);
  }
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }

};

const mapStateToProps = (state)=>{
  return {
    showScroll:state.getIn(['home','showScroll'])
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    changeHomeData(){
      dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(){
      if(document.documentElement.scrollTop>100){
        dispatch(actionCreators.toggleTopShow(true));
      }else{
        dispatch(actionCreators.toggleTopShow(false));
      }
    }
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);