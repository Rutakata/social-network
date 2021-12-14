import React from "react";
import {connect} from "react-redux";
import {logout} from "../../Redux/authReducer";
import style from "./Settings.module.css";
import {Redirect} from "react-router-dom"
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


const Settings = (props) => {
    if (props.isAuth === false) {
        return <Redirect to={"/login"} />
    }
    return (
        <div className={style.settingsContent}>
            <h1>Settings</h1>
            <button onClick={props.logout}>Log out</button>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(withAuthRedirect, connect(mapStateToProps, {logout}))(Settings)