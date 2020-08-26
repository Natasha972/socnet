import Axios from 'axios';
import { updateProfile } from '../redux/myprofile-reducer';

const axios= Axios.create({
  baseURL: 'http://dynweb.loft:8888/api/',
  withCredentials: true
})
export default {
  login (formData) {
    return axios.post(`login.php`, formData)
    .then(response=> response=response.data)
  },
  register (formData) {
    return axios.post(`register.php`, formData)
    .then(response=> response=response.data)
  },
  logout () {
    return axios.get(`logout.php`)
    .then(response=> response=response.data)
  },
  auth () {
    return axios.get(`auth.php`)
    .then(response=> response=response.data)
  },
  getUserProfile (userId) {
    return axios.get(`userprofile.php?userId=${userId}`)
    .then(response=> response.data)
  },
  getMyProfile () {
    return axios.get(`profile.php`)
    .then(response=> response.data)
  },
  getMyChats () {
    return axios.get(`chats.php`)
    .then(response=> response.data)
  },
  getUsers (limit, current) {
    return axios.get(`users.php?limit=${limit}&current=${current}`)
    .then(response=> response.data)
  },
  follow (userId) {
    return axios.get(`follow.php?userId=${userId}`)
    .then(response=> response.data)
  },
  unfollow (userId) {
    return axios.get(`unfollow.php?userId=${userId}`)
    .then(response=> response.data)
  },
  getStatus () {
    return axios.get('getStatus.php')
    .then(response=> response.data)
  },
  updateStatus (status) {
    return axios.post('updateStatus.php',{status})
    .then(response=> response.data)
  },
  addPost (post) {
    const formData= new FormData();
    formData.set('text', post.text)
    formData.append('image', post.image)
    return axios.post('addPost.php', formData, {headers:{
      "content-type": "multipart/form-data"
    }})
    .then(response=> response.data)
  },
  deletePost (post) {
    return axios.get(`deletePost.php?postId=${post}`)
    .then(response=> response.data)
  },
  updateAvatar (avatar) {
    const formData= new FormData();
    formData.append('avatar', avatar)
    return axios.post('updateavatar.php', formData, {headers:{
      "content-type": "multipart/form-data"
    }})
    .then(response=> response.data)
  },
  getPosts () {
    return axios.get('getPosts.php')
    .then(response=> response.data)
  },
  sendMessage (message, user) {
    const formData= new FormData();
    formData.set('text', message.text)
    formData.append('image', message.image)
    formData.set('user',user)
    return axios.post('sendMessage.php', formData, {headers:{
      "content-type": "multipart/form-data"
    }})
    .then(response=>response.data)
  },
  getMessages (userId) {
    return axios.post('messages.php', {userId})
    .then(response=>response.data)
  },
  getPostPage (postId) {
    return axios.post('getPostPage.php', {postId})
    .then(response=>response.data)
  },
  addComment (comment, postId) {
    const formData= new FormData();
    formData.set('text', comment.text)
    formData.append('image', comment.image)
    formData.set('post',postId)
    return axios.post('addComment.php', formData, {headers:{
      "content-type": "multipart/form-data"
    }})
    .then(response=>response.data)
  },
  updateProfile (profile) {
    return axios.post('updateProfile.php',profile)
    .then(response=>response.data)
  },
  addLike (postId) {
    return axios.post('addLike.php',{postId})
    .then(response=>response.data)
  },
  getUserPosts (userId) {

  },
  getMyPosts () {

  }
}
