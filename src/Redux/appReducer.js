import {getAuthUserData} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return {...state}
    }
}

export const initializationSuccess = () => {
    return {type: SET_INITIALIZED}
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {dispatch(initializationSuccess())})
}

export default appReducer