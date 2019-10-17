import styled from "styled-components";

export const HomeWrapper  = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`;


export const HomeLeft = styled.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  .banner-img{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div`
  float:right;
  width:280px;
`;

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding:20px 0 10px 0;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;

`;

export const TopicItem = styled.div`
  float:left;
  height:32px;
  line-height:32px;
  font-size:14px;
  margin-left:18px;
  margin-bottom:18px;
  background:#f7f7f7;
  border:1px solid #dcdcdc;
  color:#000;
  border-radius:4px;
  padding-right:10px;
  cursor:pointer;
  .topic-pic{
      display:block;
      float:left;
      width:32px;
      height:32px;
      margin-right:10px;
  }
`;

export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }

`;


export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`;


export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
  cursor:pointer;
  
`;


export const RecommendWrapper = styled.div`
  width:280px;
  margin:30px 0;
`;

export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
`;

export const BackTop = styled.div`
  position:fixed;
  right:80px;
  bottom:80px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;
  cursor:pointer;
  transition:all 0.2s ease-in;
  &.show{
    opacity:1;
  }
  &.hidden{
     opacity:0;
  }
`;

export const QRCodeWrapper = styled.div`
  display:inline-block;
  position:relative;
  width:280px;
  padding:20px 10px;
  margin-top:10px;
  box-sizing:border-box;
  border:1px solid #f0f0f0;
  border-radius:6px;
  background:#fff;
  .code-pic{
    display:block;
    width:50px;
    height:50px;
    float:left;
    vertical-align:middle;
  }
`;

export const CodeInfo = styled.div`
  float:left;
  margin-left:10px;
  vertical-align:middle;
  .title{
     font-size:14px;
     color:#333;
     line-height:25px;
  }
  .desc{
    font-size:12px;
    color:#999;
  }
`;

export const BigCodeWrapper = styled.div`
  position:absolute;
  top:-138px;
  left:50%;
  padding:10px;
  background:#fff;
  transform:translate(-50%,0);
  border:1px solid #787878;
  border-radius:10px;
  z-index:100;
  transition:all 0.5s ease-in;
  &.show{
    opacity:1;
  }
  &.hidden{
    opacity:0;
  }
  &::after,&::before{
    position:absolute;
    left:50%;
    bottom:-20px;
    transform:translate(-50%,0);
    display:block;
    content:"";
    border:10px solid transparent;
    border-top-color:#fff;
    z-index:11;
  }
  &::before{
    bottom:-22px;
    border:11px solid transparent;
    border-top-color:#000;
  }
  .big-pic{
     width:100px;
     height:100px;
  }
`;


export const WriterWrapper = styled.div`
  overflow:hidden;
`;

export const WriterTitle =  styled.div`
  overflow:hidden;
  font-size:14px;
  color:#969696;
  h3{
    float:left;
  }
  span{
    float:right;
  }
`;

export const WriterItem = styled.div`
  position:relative;
  margin-top:15px;
  line-height:20px;
  overflow:hidden;
  cursor:pointer;
  .writer-pic{
    display:block;
    float:left;
    width:48px;
    height:48px;
    margin-right:10px;
  }
 .follow{
    position:absolute;
    right:0;
    float:right;
    color:#42c02e;
    font-size:12px;
  }
`;

export const WriterItemInfo = styled.div`
  float:left;
  margin-right:60px;
  .title{
    font-size:14px;
    color:#333;
  }
  .desc{
    font-size:12px;
    color:#969696;
    margin-top:2px;
  }

`;