import {fromJS} from "immutable";
import * as actionTypes from "./actionTypes"
const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  writerList:[],
  articlePage:1,
  showScroll: false,
  showCode:false
});

export default (state = defaultState,action)=>{
  switch (action.type){
    case actionTypes.TOGGLE_CODE_SHOW:
      return state.set('showCode',action.show);
    case actionTypes.TOGGLE_SCROLL_TOP:
      return state.set('showScroll',action.show);
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        articleList:state.get('articleList').concat(action.list),
        articlePage:action.nextPage
      });
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        writerList:fromJS(action.writerList)
      });
    default:
      return state;
  }
};