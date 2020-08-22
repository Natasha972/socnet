import api from "../API/api";

const SET_CHATS= 'SET-CHATS'

let initialState= {
  chats: [],
}
const chatsReducer= (state=initialState, action)=> {
  switch(action.type) {
    case SET_CHATS:
     return {
      ...state,
      chats: action.chats,
     }
    default:
    return state;
  }

}
export const setChats= (chats)=> ({type:SET_CHATS, chats})
export const getMyChatsThunkCreator= ()=> {
  return (dispatch)=> {
    api.getMyChats().then(response=> {
      if(response.status==='success') {
        dispatch(setChats(response.chats))
      }
      else return
    })
  }
}
export default chatsReducer;