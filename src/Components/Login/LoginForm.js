import React from "react";
import {reduxForm, Field} from "redux-form";
import style from "./Login.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.fieldContainer}>
                <Field placeholder={"Login"} name={"login"} component={"input"} className={style.field}/>
            </div>
            <div className={style.fieldContainer}>
                <Field placeholder={"Password"} name={"password"} component={"input"} className={style.field}/>
            </div>
            <div className={style.fieldContainer}>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember me
            </div>
            <div>
                <button className={style.signIn}>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

export default LoginReduxForm