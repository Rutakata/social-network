import React from "react";
import style from "./FormControls.module.css"


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControls + " " + (hasError ? style.error: "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <div className={style.errorMessage}>{meta.error}</div> }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={style.formControls + " " + (hasError ? style.error: "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <div>{meta.error}</div> }
        </div>
    )
}