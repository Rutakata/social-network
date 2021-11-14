import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "70b66c8a-0e05-4c0b-bbb3-e941cc312d1f"
    }
})

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUserById(userId) {
        return instance.get(`profile/${userId}`)
    },
    followUserReq(id) {
        return instance.post(`follow/${id}`)
    },
    unfollowUserReq(id) {
        return instance.delete(`follow/${id}`)
    },
    authUser() {
        return instance.get(`auth/me`)
    }
}
