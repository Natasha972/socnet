import API from '../API/api'
const SET_COMMENTS= 'SET-COMMENTS'
const ADD_COMMENT= 'ADD-COMMENT'

const initialState= {
  comments: []
}
const postReducer= (state= initialState, action)=> {
  switch(action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.comment, ...state.comments]
      }
    default: return state
  }
}
export const setCommentsAC= (comments)=> ({type: SET_COMMENTS, comments})
export const addCommentAC= (comment)=> ({type: ADD_COMMENT, comment})


export const getCommentsThunkCreator= (postId)=> async dispatch=> {
  const response= await API.getComments(postId)
  if(response.status==='success') {
    dispatch(setCommentsAC(response.comments))
  }else return
}
export const addCommentThunkCreator= (comment, successHandler, errorHandler, props)=> async dispatch=> {
  const response= await API.addComment(comment,props.postId)
  if(response.status==='success') {
    dispatch(addCommentAC(response.comment))
    successHandler()
  }else errorHandler(response)
}

export default postReducer