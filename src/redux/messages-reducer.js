import API from "../API/api";

const MESSAGE_SENT= 'SEND-MESSAGE';
const SET_MESSAGES= 'SET-MESSAGES';

let initialState= {
  messages: []
};
const messagesReducer= (state=initialState, action)=> {
  switch(action.type){
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      }
    case MESSAGE_SENT:
      return {
        ...state,
        messages: [...state.messages, action.message],
      }
    default:
      return state;
  }
}
export let messageSent= (message)=> ({type: MESSAGE_SENT, message});
export let setMessages= (messages)=> ({type: SET_MESSAGES, messages});

export const sendMessageThunkCreator=(message, successHandler, errorHandler, props) => async dispatch => {
  let response= await API.sendMessage(message, props.user)
  if(response.status==='success') {
    dispatch(messageSent(response.message))
    successHandler()
  } else errorHandler(response)
}
export const getMessagesThunkCreator=(userId) => async dispatch => {
  let response= await API.getMessages(userId)
  if(response.status==='success') {
    dispatch(setMessages(response.messages))
    console.log(response.messages)
  } else return
}
export default messagesReducer;