import React from "react";
import './App.css';
import {Route} from "react-router-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import UsersContainer from "./Components/Users/UsersContainer";
import ChatsContainer from "./Components/Chats/ChatsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/login";
import Settings from "./Components/Settings/Settings";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./Common/Preloader/preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app">
                <HeaderContainer/>
                <SideBar />
                <div className="appContent">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                    <Route path="/messages" render={() => <ChatsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />}/>
                    <Route path="/login" render={() => <Login />}/>
                    <Route path="/settings" render={() => <Settings />} />
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
