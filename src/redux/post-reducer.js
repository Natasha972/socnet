import API from '../API/api'
const SET_POST_PAGE= 'SET-POST-PAGE'
const ADD_COMMENT= 'ADD-COMMENT'

const initialState= {
  post: {},
  comments: []
}
const postReducer= (state= initialState, action)=> {
  switch(action.type) {
    case SET_POST_PAGE:
      return {
        ...state,
        post: action.post_page.post,
        comments: action.post_page.comments
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.comment, ...state.comments]
      }
    default: return state
  }
}
export const setPostPageAC= (post_page)=> ({type: SET_POST_PAGE, post_page})
export const addCommentAC= (comment)=> ({type: ADD_COMMENT, comment})


export const getPostPageThunkCreator= (postId)=> async dispatch=> {
  const response= await API.getPostPage(postId)
  if(response.status==='success') {
    dispatch(setPostPageAC(response.post_page))
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