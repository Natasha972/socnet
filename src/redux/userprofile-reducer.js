import API from "../API/api";
import { setPostsAC } from "./posts-reducer";

const FOLLOW= "FOLLOW";
const UNFOLLOW= "UNFOLLOW";
const SET_USER_INFO= 'SET-USER';
const TOGGLE_FOLLOWING_PROGRESS= 'TOGGLE_IS_FOLLOWING';

let initialState= {
    user: {},
    followingInProgress: false,
}
const userProfileReducer= (state=initialState, action)=> {
  switch(action.type){
    case FOLLOW:
      console.log(state.user)
      return {
        ...state,
        user: {...state.user, subscription: true}
      }
    case UNFOLLOW:
      return {
        ...state,
        user: {...state.user, subscription: false}
      }
    case SET_USER_INFO:
      return {
        ...state,
        user: action.user
      }
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.inProgress
      }
    default:
      return state;
  }
}

export let setUserInfo= (user)=> ({type: SET_USER_INFO, user});
export let followUser= (userId)=> ({type: FOLLOW, id: userId});
export let unfollowUser= (userId)=> ({type: UNFOLLOW, id: userId});
export let toggleIsFollowing= (inProgress)=> ({type: TOGGLE_FOLLOWING_PROGRESS, inProgress});

export const getUserProfileThunkCreator= (userId)=> async dispatch=> {
  let response= await API.getUserProfile(userId)
  if(response.status==='success') {
    dispatch(setUserInfo(response.user))
    dispatch(setPostsAC(response.posts))
  }
}
export const followUserThunkCreator= (userId)=> async dispatch=> {
    dispatch(toggleIsFollowing(true));
    let response= await API.follow(userId)
        if(response ==='success') dispatch(followUser(userId));
        dispatch(toggleIsFollowing(false));
}
export const unfollowUserThunkCreator= (userId)=> async (dispatch)=> {
    dispatch(toggleIsFollowing(true));
    let response= await API.unfollow(userId)
      if(response ==='success') dispatch(unfollowUser(userId));
      dispatch(toggleIsFollowing(false))
}

export default userProfileReducer;