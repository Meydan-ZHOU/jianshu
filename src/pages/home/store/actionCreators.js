import axios from "axios";
import * as actionTypes from "./actionTypes"
import {fromJS} from "immutable"

export const changeHomeData = (result)=>({
  type:actionTypes.CHANGE_HOME_DATA,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList,
  writerList:result.writerList,
});

export const addHomeList = (result,nextPage)=>({
  type:actionTypes.ADD_ARTICLE_LIST,
  list:fromJS(result),
  nextPage
});

export const toggleTopShow = (show)=>({
  type:actionTypes.TOGGLE_SCROLL_TOP,
  show
});

export const toggleCodeShow = (show)=>({
  type:actionTypes.TOGGLE_CODE_SHOW,
  show
});

export const getHomeInfo = ()=>{
  return (dispatch)=>{
    axios.get("/api/home.json").then(res=>{
      let result  = res.data.data;
      dispatch(changeHomeData(result))
    }).catch(error=>{
      "请求home数据失败！"    });
  };
};

export const getMoreList = (page)=>{
  return (dispatch) =>{
    axios.get("/api/homeList.json?page="+page).then(res=>{
      const result = res.data.data;
      dispatch(addHomeList(result,page+1));
    }).catch(error=>{
      console.log("获取更多列表信息失败");
    });
  };
};