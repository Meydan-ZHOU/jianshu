import styled from "styled-components";

export const LoginWrapper = styled.div`
  width:100%;
  height:100%;
  background:#f1f1f1;
  overflow:hidden;
`;

export const LogoWrapper = styled.div`
  .logo-pic{
    margin-top:60px;
    margin-left:60px;
  }
`;

export const LoginBox = styled.div`
  width:400px;
  background:#fff;
  margin:60px auto 0;
  box-shadow:0 0 8px rgba(0,0,0,.1);
  border-radius:5px;
  box-sizing:border-box;
  padding:50px;
`;

export const LoginTitle = styled.div`
  text-align:center;
  font-weight:400;
  padding:10px;
  margin-bottom:40px;
  color:#969696;
  font-size:18px;
  a{
    color:#969696;
    text-decoration:none;
    padding:10px;
    cursor:pointer;
    &.active{
     font-weight:700;
     color:#ea6f5a;
    }
    &.active,&:hover{
      border-bottom :2px solid #ea6f5a;
    }
  }
  
`;

export const InputWrapper = styled.div`
  width:100%;
  position:relative;
  .iconfont{
    position:absolute;
    left:10px;
    top:14px;
    color:#969696;
    font-size:18px;
  }
`;

export const Input =  styled.input`
  width:100%;
  height:50px;
  padding:10px 35px;
  box-sizing:border-box;
  vertical-align:middle;
  border:1px solid #c8c8c8;
  &.account{
    border-radius:4px 4px 0 0;
    border-bottom:none;
  }
  &.password{
    border-radius:0 0 4px 4px;
  }
  background:hsla(0,0%,71%,.1);
`;

export const Addition = styled.div`
  margin:15px 0;
  font-size:14px;
  color:#969696;
  input{
    vertical-align:middle;
  }
  .question{
    float:right;
  }
`;

export const Button = styled.button`
   width:100%;
   background:#3194d0;
   font-size:18px;
   padding:9px 18px;
   cursor:pointer;
   outline:none;
   margin-top:20px;
   border-radius:25px;
   color:#fff;
   border:none;
   &:hover{
     background:#0d89d4;
   }
`;
