import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import chatsReducer from "./chatsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    chatsPage: chatsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store