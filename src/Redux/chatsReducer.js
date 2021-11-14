const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"

let initialState = {
    users: [
        {id: 1, username: "Cursed"},
        {id: 2, username: "Akuma"},
        {id: 3, username: "Shadowraze"}
    ],
    messages: [
        {id: 1, message: "Курсед? А я думал Денди"},
        {id: 2, message: "Здарова, это ты на СФЕ 0-10?"}
    ],
    newChatMessage: ""
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = state.newChatMessage

            return {
                ...state,
                newChatMessage: '',
                messages: [...state.messages, {id:state.messages.length + 1, message: newMessage}]
            }

        case UPDATE_MESSAGE:
            return {
                ...state,
                newChatMessage: action.newMessage
            }
        default:
            return state
    }
}

export const sendNewMessageActionCreator = () => {
    return {
        type: SEND_NEW_MESSAGE
    }
}

export const updateMessageActionCreator = (newMess) => {
    return {
        type: UPDATE_MESSAGE,
        newMessage: newMess
    }
}

export default chatsReducer