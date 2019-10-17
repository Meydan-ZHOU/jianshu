import * as actionType  from "./actionTypes";
import {fromJS} from "immutable"
import axios from "axios";

export const searchFocus = ()=>({
  type:actionType.SEARCH_FOCUS
});

export const searchBlur = ()=>({
  type:actionType.SEARCH_BLUR
});

export const changeList = (data)=>({
  type:actionType.CHANGE_LIST,
  data:fromJS(data),
  totalPage:Math.ceil(data.length / 10)
});

export const changePage = (page)=>({
  type:actionType.CHANGE_PAGE,
  page:page
});

export const mouseEnter = ()=>({
  type:actionType.MOUSE_ENTER
});

export const mouseLeave = ()=>({
  type:actionType.MOUSE_LEAVE
});

export const getList = ()=>{
  return (dispatch)=>{
    axios.get("/api/header.json").then(res=>{
      let data = res.data;
      dispatch(changeList(data.data))
    }).catch(error=>{
      console.log("请求热门搜索列表失败");
    })
  };
};