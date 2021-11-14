import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";


let store = {
    _state: {
        chatsPage: {
            users: [
                {id: 1, username: "Cursed"},
                {id: 2, username: "Akuma"},
                {id: 3, username: "Shadowraze"}
            ],
            messages: [
                {message: "Курсед? А я думал Денди"},
                {message: "Здарова, это ты на СФЕ 0-10?"}
            ],
            newChatMessage: ""
        },
        profilePage: {
            postMessages: [
                {id: 1, message: "Обожнюю Майнкрафт", likes: 0},
                {id: 2, message: "Тільки що ширнувся", likes: 0},
                {id: 3, message: "Вивчаю React", likes: 0}
            ],
            newPostMessage: ""
        },
        sidebar: {}
    },

    getState() {
        return this._state
    },

    renderEntireTree() {
    },

    subscribe(observer) {
        this.renderEntireTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.chatsPage = chatsReducer(this._state.chatsPage, action)

        this.renderEntireTree()

        /*if (action.type === ADD_NEW_POST) {
            let newPost = {
                id: this._state.profilePage.postMessages.length + 1,
                message: this._state.profilePage.newPostMessage,
                likes: 0
            }

            this._state.profilePage.postMessages.push(newPost)
            this._state.profilePage.newPostMessage = ''
            this.subscribe()

        } else if (action.type === UPDATE_POST_MESSAGE) {
            this._state.profilePage.newPostMessage = action.newPostMessage
            this.subscribe()

        } else if (action.type === SEND_NEW_MESSAGE) {
            let newMessage = {
                message: this._state.chatsPage.newChatMessage
            }

            this._state.chatsPage.messages.push(newMessage)
            this._state.chatsPage.newChatMessage = ''
            this.subscribe()

        } else if (action.type === UPDATE_MESSAGE) {
            this._state.chatsPage.newChatMessage = action.newMessage
            this.subscribe()
        }*/
    }
}

export default store;