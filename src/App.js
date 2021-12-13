import './App.css';
import {Route} from "react-router-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import UsersContainer from "./Components/Users/UsersContainer";
import ChatsContainer from "./Components/Chats/ChatsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/login";
import Settings from "./Components/Settings/Settings";

function App() {
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
    );
}

export default App;
