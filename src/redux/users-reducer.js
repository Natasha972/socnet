import API from "../API/api";

const SET_USERS= "SET-USERS";
const SET_CURRENT= "SET-CURRENT";
const SET_TOTAL_USERS_COUNT= "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING= "TOGGLE-IS-FETCHING";
const SET_SUBSCRIPTIONS= "SET-SUBSCRIPTIONS";

let initialState = {
  users: [],
  limit: 2,
  usersCount:0,
  currentPage: 1,
  isFetching: false,
}
const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_USERS:
      return {
        ...state,
        users: [ ...action.users]
      }
    case SET_CURRENT:
      return {
        ...state,
        currentPage: action.current
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        usersCount: action.count
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default: return state;
  }
}
export let setUsers= (users)=> ({type: SET_USERS, users});
export let setCurrentPageAC= (current)=> ({type: SET_CURRENT, current});
export let setUsersCount= (count)=> ({type: SET_TOTAL_USERS_COUNT, count});
export let toggleIsFetching= (isFetching)=> ({type: TOGGLE_IS_FETCHING, isFetching});
export let setSubscriptions= (subscriptions)=> ({type: SET_SUBSCRIPTIONS, subscriptions})

export const getUsersThunkCreator= (limit, currentPage)=> async (dispatch)=> {
    dispatch(toggleIsFetching(true));
    let response= await API.getUsers(limit,currentPage)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.users));
    dispatch(setUsersCount(response.totalCount));
}
export default usersReducer;
