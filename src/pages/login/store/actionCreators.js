import axios from "axios"
import * as actionTypes from "./actionTypes"


export const changeLogin = (status)=>({
  type:actionTypes.CHANGE_LOGIN,
  status
});

export const login = ()=>{
  return (dispatch)=>{
    axios.get("/api/login.json").then(res=>{
      let result = res.data;
      dispatch(changeLogin(true))
    }).catch(error=>{
      console.log("获取登录信息失败");
    })
  };
}