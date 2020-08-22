import React from 'react'
import './Users.css';
import Users from './Users';
import { connect } from 'react-redux';
import { setCurrentPageAC, getUsersThunkCreator} from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import { getUsers, getLimit, getUsersCount, getCurrentPage, getIsFetching } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

  componentDidMount(){
    this.props.getUsersThunkCreator(this.props.limit, this.props.currentPage)
  }

  setCurrentPage=(currentPage)=> {
    this.props.setCurrentPageAC(currentPage);
    this.props.getUsersThunkCreator(this.props.limit, currentPage)
  }

  render(){
    return  <>
              {this.props.isFetching?<Preloader/>: null}
              <Users {...this.props} setCurrentPage={this.setCurrentPage}/>
            </>
  }
}

let mapStateToProps= (state)=> {
  return {
    users: getUsers(state),
    limit: getLimit(state),
    usersCount: getUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state)
  }
}

export default connect(mapStateToProps, {setCurrentPageAC, getUsersThunkCreator})(UsersContainer);



