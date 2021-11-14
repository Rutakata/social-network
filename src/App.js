import './App.css';
import {Route} from "react-router-dom";
import SideBar from "./Components/Sidebar/Sidebar";
import UsersContainer from "./Components/Users/UsersContainer";
import ChatsContainer from "./Components/Chats/ChatsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

function App(props) {
    return (
        <div className="app">
            <HeaderContainer/>
            <SideBar />
            <div className="appContent">
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/messages" render={() => <ChatsContainer />}/>
                <Route path="/users" render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App;
