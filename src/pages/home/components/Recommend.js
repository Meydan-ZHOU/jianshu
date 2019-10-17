import React,{Component} from "react";
import {connect} from "react-redux"
import {actionCreators} from "../store"
import {RecommendWrapper,RecommendItem,QRCodeWrapper,CodeInfo,BigCodeWrapper} from "../style"

class Recommend extends Component{
  render(){
    const {list,showCode,toggleCodeShow} = this.props;
    return (
      <RecommendWrapper>
        {
          list.map(item=>(
            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
          ))
        }
        <QRCodeWrapper
          onMouseEnter={()=>toggleCodeShow(true)}
          onMouseLeave={()=>toggleCodeShow(false)}
        >
          <img
            className="code-pic"
            src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
            alt=""
          />
          <CodeInfo>
            <h3 className="title">下载简书手机App&gt;</h3>
            <p className="desc">随时随地发现和创作内容</p>
          </CodeInfo>
          <BigCodeWrapper className={showCode?'show':'hidden'}>
            <img
              className="big-pic"
              src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              alt=""
            />
          </BigCodeWrapper>
        </QRCodeWrapper>
      </RecommendWrapper>
    );
  }
};

const mapStateToProps = (state)=>{
  return {
    list:state.getIn(['home','recommendList']),
    showCode:state.getIn(['home','showCode'])
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    toggleCodeShow(show){
      dispatch(actionCreators.toggleCodeShow(show));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Recommend);