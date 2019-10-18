import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./common/header"
import {GlobalStyle} from "./style"
import store from "./store"
import {IconfontStyle} from "./static/iconfont/iconfont"

import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="App">
            <GlobalStyle/>
            <IconfontStyle/>
            <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
};


export default App;