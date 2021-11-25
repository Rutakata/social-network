import Chats from "./Chats";
import {sendNewMessage, updateMessage} from "../../Redux/chatsReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.chatsPage.users,
        messages: state.chatsPage.messages,
        newChatMessage: state.chatsPage.newChatMessage,
        isAuth: state.auth.isAuth
    }
}


const ChatsContainer = connect(mapStateToProps, {sendNewMessage, updateMessage})(Chats)

export default ChatsContainer