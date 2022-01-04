import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "70b66c8a-0e05-4c0b-bbb3-e941cc312d1f",
        "Access-Control-Allow-Origin": "https://social-network.samuraijs.com/api/1.0/"
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUserReq(id) {
        return instance.post(`follow/${id}`)
    },
    unfollowUserReq(id) {
        return instance.delete(`follow/${id}`)
    }
}

export const profileApi = {
    getUserById(userId) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
}

export const authApi = {
    authUser() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}
