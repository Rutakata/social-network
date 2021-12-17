export const getProfileInfo = (state) => {
    return state.profilePage.profileInfo
}
export const getStatusFromState = (state) => {
    return state.profilePage.status
}
export const getLoggedUserId = (state) => {
    return state.auth.userId
}