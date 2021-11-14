import Message from "./Message/Message";
import React from "react";
import UsersChat from "./UsersChat/UsersChat";
import style from "./Chats.module.css"


const Chats = (props) => {
    let throwUser = props.users.map(u => {return (<UsersChat username={u.username} chatid={u.id}/>)})
    let throwMessage = props.messages.map(m => {return (<Message message={m.message} />)})

    let newMessageText = React.createRef()

    let addMessage = () => {
        props.sendNewMessage()
    }

    let onMessageChange = () => {
        let newMessage = newMessageText.current.value
        props.updateMessage(newMessage)
    }

    return (
        <div className={style.content}>
            <div className={style.users}>
                {throwUser}
            </div>
            <div className={style.userChat}>
                {throwMessage}
                <textarea onChange={onMessageChange} className={style.messageText}
                          ref={newMessageText} value={props.newChatMessage} />
                <button className={style.sendMessage} onClick={addMessage}>Написати</button>
            </div>
        </div>

    )
}

export default Chats