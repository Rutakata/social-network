import React, {useEffect, useState} from "react";
import style from "./ProfileStatus.module.css";


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.changeStatus === true){
            setEditMode(true)
        }
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={style.status}>
            {!editMode &&
            <div>
                <span onClick={activateEditMode}> {props.status || "No status"} </span>
            </div>
            }
            {editMode &&
            <div className={style.statusEdit}>
                <input onChange={onStatusChange} value={status} /><br/>
                <button onClick={deactivateEditMode}>Змінити</button>
            </div>
            }

        </div>
    )
}

export default ProfileStatusWithHooks