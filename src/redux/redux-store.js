import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import myProfileReducer from './myprofile-reducer';
import messagesReducer from './messages-reducer';
import chatsReducer from './chats-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import thunkMW from 'redux-thunk'
import userProfileReducer from './userprofile-reducer';
import postsReducer from './posts-reducer';
import postReducer from './post-reducer';

let reducers= combineReducers({
  posts:postsReducer,
  profile: myProfileReducer,
  user: userProfileReducer,
  messages: messagesReducer,
  chats: chatsReducer,
  users: usersReducer,
  app: appReducer,
  post: postReducer
});

//for redux extantion
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMW)));

// let store= createStore(reducers, applyMiddleware(thunkMW));

export default store;