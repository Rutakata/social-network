import React from "react";
import {reduxForm, Field} from "redux-form";
import style from "./Login.module.css"
import {Input} from "../../Common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.fieldContainer}>
                <Field placeholder="Login" name="email" component={Input} className={style.field}
                       validate={[required]}/>
            </div>
            <div className={style.fieldContainer}>
                <Field placeholder="Password" name="password" component={Input} type="password" className={style.field}
                       validate={[required]}/>
            </div>
            <div className={style.fieldContainer}>
                <Field type="checkbox" name="rememberMe" component="input"/> Remember me
            </div>
            {props.error && <div className={style.formError}>
                {props.error}
            </div>
            }
            <div>
                <button className={style.signIn}>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm