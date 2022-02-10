export const getProfileInfo = (state) => {
    return state.profilePage.profileInfo
}
export const getStatusFromState = (state) => {
    return state.profilePage.status
}
export const getLoggedUserId = (state) => {
    return state.auth.userId
}
export const getUserFullName = (state) => {
    return state.profilePage.profileInfo.fullName
}
export const getPostMessages = (state) => {
    return state.profilePage.postMessages
}
export const getNewPostMessage = (state) => {
    return state.profilePage.newPostMessage
}