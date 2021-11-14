import Chats from "./Chats";
import {sendNewMessageActionCreator, updateMessageActionCreator} from "../../Redux/chatsReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.chatsPage.users,
        messages: state.chatsPage.messages,
        newChatMessage: state.chatsPage.newChatMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage:() => {
            dispatch(sendNewMessageActionCreator())
        },
        updateMessage: (newMessage) => {
            dispatch(updateMessageActionCreator(newMessage))
        }
    }
}

const ChatsContainer = connect(mapStateToProps, mapDispatchToProps)(Chats)

export default ChatsContainer