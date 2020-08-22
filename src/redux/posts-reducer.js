import API from '../API/api'
const SET_POSTS = 'SET-POSTS'
const ADD_LIKE= 'ADD-LIKE'

let initialState= {
  posts: [] ,
}
const postsReducer= (state=initialState, action)=> {
  switch(action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    case ADD_LIKE:
    return {
      ...state,
      posts: state.posts.map(post=> {
        if(post.id==action.post.id) {
           return post= action.post
        }else return post
      })
    }
    default:
      return state;
  }
}
export const setPosts= (posts)=> ({type: SET_POSTS, posts})
export const addLikeAC= (post)=> ({type: ADD_LIKE, post })

export const getPostsThunkCreator=()=> async (dispatch)=> {
  let response= await API.getPosts();
  if(response.status==='success') {
    dispatch(setPosts(response.posts))
  }
}
export const addLikeThunkCreator= (postId)=> async dispatch=> {
  const response= await API.addLike(postId)
  if(response.status==='success'){
    dispatch(addLikeAC(response.post))
  }
}
export default postsReducer;