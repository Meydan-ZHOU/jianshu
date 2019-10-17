import React,{Component} from "react";
import {connect} from "react-redux";
import {WriterWrapper,WriterTitle,WriterItem,WriterItemInfo} from "../style"

class Writer extends Component{
  render(){
    const {list} = this.props;
    console.log(list.toJS());
    return (
      <WriterWrapper>
        <WriterTitle>
          <h3>推荐作者</h3>
          <span><i  className="iconfont spin">&#xe851;</i>换一批</span>
        </WriterTitle>
        {
          list.map((item,index)=>(
            <WriterItem key={index}>
              <img src={item.get('avatar_source')} alt="" className="writer-pic" />
              <WriterItemInfo>
                <h3 className="title">{item.get('nickname')}</h3>
                <p className="desc">写了{(item.get('total_likes_count')/100).toFixed(1)}k字-{(item.get('total_likes_count')/100).toFixed(1)}k喜欢</p>
              </WriterItemInfo>
              <span className="follow">+关注</span>
            </WriterItem>
          ))
        }

      </WriterWrapper>
    );
  }
};


const mapStateToProps = (state)=>{
  return {
    list:state.getIn(['home','writerList'])
  }
};


export default connect(mapStateToProps,null)(Writer);