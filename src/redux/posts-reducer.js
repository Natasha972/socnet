import API from '../API/api'
const SET_POSTS = 'SET-POSTS'
const ADD_LIKE= 'ADD-LIKE'
const ADD_POST= 'ADD-POST';

let initialState= {
  posts: [] ,
}
const postsReducer= (state=initialState, action)=> {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };
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
export const setPostsAC= (posts)=> ({type: SET_POSTS, posts})
export const addLikeAC= (post)=> ({type: ADD_LIKE, post })
export let addPostAC= (post)=> ({type: ADD_POST, post});

export const getPostsThunkCreator=()=> async (dispatch)=> {
  let response= await API.getPosts();
  if(response.status==='success') {
    dispatch(setPostsAC(response.posts))
  }
}
export const getMyPostsThunkCreator=()=> async (dispatch)=> {
  let response= await API.getMyPosts();
  if(response.status==='success') {
    dispatch(setPostsAC(response.posts))
  }
}
export const addLikeThunkCreator= (postId)=> async dispatch=> {
  const response= await API.addLike(postId)
  if(response.status==='success'){
    dispatch(addLikeAC(response.post))
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
  if(response.status==="success")dispatch(setPostsAC(response.posts))
  else console.log('delete post response:',response)
}
export default postsReducer;