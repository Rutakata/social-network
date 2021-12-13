import React from "react";
import LoginReduxForm from "./LoginForm";
import style from "./Login.module.css"
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }else {
        return (
            <div className={style.loginPageBody}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        )
    }
}

let mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStatetoProps, {login})(Login)