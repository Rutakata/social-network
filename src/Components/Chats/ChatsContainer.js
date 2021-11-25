import Chats from "./Chats";
import {sendNewMessage, updateMessage} from "../../Redux/chatsReducer";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        users: state.chatsPage.users,
        messages: state.chatsPage.messages,
        newChatMessage: state.chatsPage.newChatMessage
    }
}

let AuthRedirect = withAuthRedirect(Chats)

const ChatsContainer = connect(mapStateToProps, {sendNewMessage, updateMessage})(AuthRedirect)

export default ChatsContainer