import API from "../API/api";

const SET_LOGIN = "SET-LOGIN";
const SET_LOGOUT = "SET-LOGOUT";
const SET_APP_INIT = "SET-APP-INIT";

let initialState = {
  isFetching: false,
  islogin: false,
  init: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        islogin: true,
      }
    case SET_LOGOUT:
      return {
        ...state,
        islogin: false,
      }
    case SET_APP_INIT:
      return {
        ...state,
       init: true,
      }
    default:
      return state;
  }
};

export let setLogin = () => ({ type: SET_LOGIN});
export let setLogout = () => ({ type: SET_LOGOUT});
export let setInitApp = () => ({ type: SET_APP_INIT});

export const appInitThunkCreator = () => async dispatch => {
  await dispatch(authThunkCreator())
  dispatch(setInitApp())
}
export const loginThunkCreator = (formData, errorHandler) => async dispatch => {
  let response= await API.login(formData)
    if (response==='success') {
      dispatch(setLogin())
    } else errorHandler(response)
}
export const registerThunkCreator = (formData, errorHandler) => async dispatch => {
  let response= await API.register(formData)
    if (response==='success') {
      dispatch(setLogin())
    } else errorHandler(response)
}
export const logoutThunkCreator = () => async dispatch => {
  let response= await API.logout()
  if (response === "success") {
    dispatch(setLogout())
  } else return
}
export const authThunkCreator = () => async dispatch => {
  // возвращаем промис для dispatchResult in appInitThunkCreator
  let response= await API.auth()
  if (response === "success") {
   dispatch(setLogin())
  } else return
}
export default authReducer;
