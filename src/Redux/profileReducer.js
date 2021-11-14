const ADD_NEW_POST = "ADD-NEW-POST"
const UPDATE_POST_MESSAGE = "UPDATE-POST-MESSAGE"
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    postMessages: [
        {id: 1, message: "Обожнюю Майнкрафт", likes: 0},
        {id: 2, message: "Лаби Шолохова - пекло", likes: 0},
        {id: 3, message: "Вивчаю React", likes: 0}
    ],
    newPostMessage: "",
    profileInfo: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id:state.postMessages.length + 1,
                message: state.newPostMessage,
                likes: 0
            }

            return {...state, newPostMessage: '', postMessages: [...state.postMessages, newPost]}
        case UPDATE_POST_MESSAGE:
            return {...state, newPostMessage: action.newPostMessage}
        case SET_USER_PROFILE:
            return {...state, profileInfo: action.profileInfo}
        default:
            return state
    }
}

export const addNewPostActionCreator = () => {
    return {
        type: ADD_NEW_POST
    }
}

export const updatePostMessageActionCreator = (postText) => {
    return {
        type: UPDATE_POST_MESSAGE,
        newPostMessage: postText
    }
}

export const setUserProfile = (profileInfo) => {
    return {
        type: SET_USER_PROFILE,
        profileInfo
    }
}

export default profileReducer