import Message from "./Message/Message";
import React from "react";
import UsersChat from "./UsersChat/UsersChat";
import style from "./Chats.module.css"
import {Redirect} from "react-router-dom";


const Chats = (props) => {
    let throwUser = props.users.map(u => {
        return (<UsersChat username={u.username} chatid={u.id}/>)
    })
    let throwMessage = props.messages.map(m => {
        return (<Message message={m.message}/>)
    })

    let newMessageText = React.createRef()

    let onMessageChange = () => {
        let newMessage = newMessageText.current.value
        props.updateMessage(newMessage)
    }

    if (!props.isAuth) {
        return <Redirect to="/login" />
    }

    return (
        <div className={style.content}>
            <div className={style.users}>
                {throwUser}
            </div>
            <div className={style.userChat}>
                {throwMessage}
                <textarea onChange={onMessageChange} className={style.messageText}
                          ref={newMessageText} value={props.newChatMessage}/>
                <button className={style.sendMessage} onClick={props.sendNewMessage}>Написати</button>
            </div>
        </div>

    )


}

export default Chats