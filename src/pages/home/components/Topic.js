import React,{Component} from "react";
import {connect} from "react-redux";

import {
  TopicWrapper,
  TopicItem
} from "../style";

class Topic extends Component{
  render(){
    let {list} = this.props;
    let newList = list.toJS();
    return (
      <TopicWrapper>
        {
          newList.map((item,index)=>(
            <TopicItem key={item.id}>
              <img
                className="topic-pic"
                src={item.imgUrl}
                alt=""
              />
              {item.title}
            </TopicItem>
          ))
        }

      </TopicWrapper>
    );
  };
};

const mapStateToProps = (state)=>{
  return {
    list : state.getIn(['home','topicList'])
  };
};

export default connect(mapStateToProps,null)(Topic);