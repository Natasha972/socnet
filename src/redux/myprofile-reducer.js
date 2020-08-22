import API from "../API/api";

const ADD_POST= 'ADD-POST';
const DELETE_POST= 'DELETE-POST';
const UPDATE_NEW_POST_TEXT= 'UPDATE-NEW-POST-TEXT';
const SET_MY_INFO= 'SET-MY-INFO';
const SET_MY_POSTS= 'SET-MY-POSTS';
const UPDATE_STATUS= 'profile/UPDATE-STATUS';
const UPDATE_AVATAR= 'profile/UPDATE-AVATAR';

let initialState= {
    user: {},
    posts: [],
    newPostText: ""
}
const myProfileReducer= (state=initialState, action)=> {
  switch(action.type){
    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        newPostText: ""
      };
    case DELETE_POST:
      return {
        ...state,
        posts: action.posts,
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text
      };
    case SET_MY_INFO:
      return {
        ...state,
        user: action.user
      }
    case SET_MY_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case UPDATE_STATUS:
      return {
        ...state,
        user: {...state.user, status: action.status}
      }
    case UPDATE_AVATAR:
      return {
        ...state,
        user: {...state.user, avatar: action.avatar}
      }
    default:
      return state;
  }
}
export let addPostAC= (post)=> ({type: ADD_POST, post});
export let deletePostAC= (posts)=> ({type: DELETE_POST, posts});
export let updateText= (text)=> ({type: UPDATE_NEW_POST_TEXT, text});
export let setMyInfo= (user)=> ({type: SET_MY_INFO, user});
export let setMyPosts= (posts)=> ({type: SET_MY_POSTS, posts});
export let updateStatusAC= (status)=> ({type: UPDATE_STATUS, status})
export let updateAvatarAC= (avatar)=> ({type: UPDATE_AVATAR, avatar})

export const getMyProfileThunkCreator= ()=> async dispatch=> {
  let response= await API.getMyProfile();
  if(response.status==='success') {
    dispatch(setMyInfo(response.user))
    dispatch(setMyPosts(response.posts))
  }
  else return;
}
export const updateStatusThunkCreator= (status)=> async dispatch=> {
  let response= await API.updateStatus(status)
  if(response==="success")dispatch(updateStatusAC(status))
}
export const updateAvatarThunkCreator= (avatar, successHandler)=> async dispatch=> {
  let response= await API.updateAvatar(avatar)
  if(response.status==="success") {
    dispatch(updateAvatarAC(response.avatar))
    successHandler()
  }
}
export const addPostThunkCreator= (post, successHandler, errorHandler)=> async dispatch=> {
  let response= await API.addPost(post)
  if(response.status==="success") {
    dispatch(addPostAC(response.post))
    successHandler();
  }
  else errorHandler(response)
}
export const deletePostThunkCreator= (post)=> async dispatch=> {
  let response= await API.deletePost(post)
  if(response.status==="success")dispatch(deletePostAC(response.posts))
  else console.log('delete post response:',response)
}
export const updateProfileThunkCreator= (profile, errorHandler, successHandler)=> async dispatch=> {
  let response= await API.updateProfile(profile)
   if(response.status==="success") {
    dispatch(setMyInfo(response.profile))
    successHandler();
  }
  else errorHandler(response)
}
export default myProfileReducer;