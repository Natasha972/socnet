export const getUsers= (state)=> {
  return state.users.users
}
export const getLimit= (state)=> {
  return state.users.limit
}
export const getUsersCount= (state)=> {
  return state.users.usersCount
}
export const getCurrentPage= (state)=> {
  return state.users.currentPage
}
export const getIsFetching= (state)=> {
  return state.users.isFetching
}