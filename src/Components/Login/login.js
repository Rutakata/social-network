import React from "react";
import LoginReduxForm from "./LoginForm";
import style from "./Login.module.css"


const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className={style.loginPageBody}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login