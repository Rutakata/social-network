import {usersApi} from "../API/api";

const FOLLOW_USER = "usersReducer/FOLLOW-USER"
const UNFOLLOW_USER = "usersReducer/UNFOLLOW-USER"
const SET_USERS = "usersReducer/SET-USERS"
const SET_CURRENT_PAGE = "usersReducer/SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "usersReducer/SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "usersReducer/TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "usersReducer/TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userID) => {
    return {type: FOLLOW_USER, id: userID}
}

export const unfollowSuccess = (userID) => {
    return {type: UNFOLLOW_USER, id: userID}
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}

export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage: currentPage}
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}

export const toggleFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}

export const toggleFollowingProgress = (followingInProgress, userId) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId}
}

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetching(true))

    let response = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleFetching(false))

}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))

    let response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const followUser = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.followUserReq.bind(usersApi), followSuccess)
}


export const unfollowUser = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersApi.unfollowUserReq.bind(usersApi), unfollowSuccess)
}


export default usersReducer