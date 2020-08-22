import React from "react";
import { Route } from "react-router-dom";
import { appInitThunkCreator } from "./redux/app-reducer";
import { connect } from "react-redux";
import UserProfileContainer from "./Components/Profile/UserProfile-container";
import MessagesContainer from "./Components/Messages/Messages-container";
import MyProfileContainer from "./Components/Profile/MyProfile-container";
import HeaderContainer from "./Components/Header/Header-container";
import Login from "./Components/Login/Login";
import Preloader from "./Components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import HomeContainer from './Components/Home/Home'
import PostPageContainer from "./Components/Posts/PostPage-container";
import Registration from "./Components/Login/Registration";
const ChatsContainer = React.lazy(() =>
  import("./Components/Chats/Chats-container")
);
const UsersContainer = React.lazy(() =>
  import("./Components/Users/Users-container")
);
class AppComponent extends React.Component {
  componentDidMount() {
    this.props.appInitThunkCreator();
  }
  render() {
    if (!this.props.init) {
      return <Preloader />;
    }
    return (
      <div className="App">
        <HeaderContainer />
        <div className="main-container">
          <Route exact path="/" render={() => <HomeContainer/>} />
          <Route exact path="/users" render={() => (
            <React.Suspense fallback={<Preloader/>}>
              <UsersContainer />
            </React.Suspense>
          )} />
          <Route exact path="/users/:userId" render={() => <UserProfileContainer />} />
          <Route path="/profile" render={() => <MyProfileContainer />} />
          <Route path="/chats" render={() => (
              <React.Suspense fallback={<Preloader/>}>
                <ChatsContainer />
              </React.Suspense>
          )}/>
          <Route path="/messages/:userId" render={() => <MessagesContainer />} />
          <Route path="/post/:postId" render={() => <PostPageContainer />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/registration" render={() => <Registration />} />
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    init: state.app.init,
    posts: state.posts.posts
  };
};
let AppContainer = connect(mapStateToProps, { appInitThunkCreator })(
  AppComponent
);
let App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default App;
