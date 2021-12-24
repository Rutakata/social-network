import React from "react";
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import UsersContainer from "./Components/Users/UsersContainer";
import ChatsContainer from "./Components/Chats/ChatsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/login";
import Settings from "./Components/Settings/Settings";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./Common/Preloader/preloader";
import {compose} from "redux";
import {withRouter} from "react-router";
import store from "./Redux/reduxStore";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app">
                <HeaderContainer/>
                <SideBar/>
                <div className="appContent">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/messages" render={() => <ChatsContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer =  compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

let FullAppComponent = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default FullAppComponent