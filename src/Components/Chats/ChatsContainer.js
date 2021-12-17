import Chats from "./Chats";
import {sendNewMessage} from "../../Redux/chatsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        users: state.chatsPage.users,
        messages: state.chatsPage.messages,
        newChatMessage: state.chatsPage.newChatMessage
    }
}

let ChatsContainer = compose(withAuthRedirect, connect(mapStateToProps, {sendNewMessage}))(Chats)

export default ChatsContainer