const SEND_NEW_MESSAGE = "SEND-NEW-MESSAGE"

let initialState = {
    users: [
        {id: 1, username: "Cursed"},
        {id: 2, username: "Akuma"},
        {id: 3, username: "Shadowraze"}
    ],
    messages: [
        {id: 1, message: "Курсед? А я думал Денди"},
        {id: 2, message: "Здарова, это ты на СФЕ 0-10?"}
    ]
}

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:state.messages.length + 1, message: action.newMessage}]
            }
        default:
            return state
    }
}

export const sendNewMessage = (newMessage) => {
    return {
        type: SEND_NEW_MESSAGE,
        newMessage
    }
}

export default chatsReducer