import API from "../API/api";
import { setPostsAC } from "./posts-reducer";

const SET_MY_INFO= 'SET-MY-INFO';
const UPDATE_STATUS= 'profile/UPDATE-STATUS';
const UPDATE_AVATAR= 'profile/UPDATE-AVATAR';

let initialState= {
    user: {}
}
const myProfileReducer= (state=initialState, action)=> {
  switch(action.type){
    case SET_MY_INFO:
      return {
        ...state,
        user: action.user
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

export let setMyInfo= (user)=> ({type: SET_MY_INFO, user});
export let updateStatusAC= (status)=> ({type: UPDATE_STATUS, status})
export let updateAvatarAC= (avatar)=> ({type: UPDATE_AVATAR, avatar})

export const getMyProfileThunkCreator= ()=> async dispatch=> {
  let response= await API.getMyProfile();
  if(response.status==='success') {
    dispatch(setMyInfo(response.user))
    dispatch(setPostsAC(response.posts))
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
export const updateProfileThunkCreator= (profile, errorHandler, successHandler)=> async dispatch=> {
  let response= await API.updateProfile(profile)
   if(response.status==="success") {
    dispatch(setMyInfo(response.profile))
    successHandler();
  }
  else errorHandler(response)
}
export default myProfileReducer;