import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter,Route} from "react-router-dom";
import Header from "./common/header"
import {GlobalStyle} from "./style"
import store from "./store"
import {IconfontStyle} from "./static/iconfont/iconfont"

import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="App">
            <GlobalStyle/>
            <IconfontStyle/>
            <Header/>
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail" exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
};

export default App;