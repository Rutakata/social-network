import {profileApi} from "../API/api";

const ADD_NEW_POST = "ADD-NEW-POST"
const UPDATE_POST_MESSAGE = "UPDATE-POST-MESSAGE"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    postMessages: [
        {id: 1, message: "Обожнюю Майнкрафт", likes: 0},
        {id: 2, message: "Лаби Шолохова - пекло", likes: 0},
        {id: 3, message: "Вивчаю React", likes: 0}
    ],
    newPostMessage: "",
    profileInfo: null,
    status: ""
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
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addNewPost = () => {
    return {
        type: ADD_NEW_POST
    }
}

export const updatePostMessage = (postText) => {
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

export const setStatus = (newStatus) => {
    return {
        type: SET_STATUS,
        status: newStatus
    }
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getUserById(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getUserStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


export default profileReducer