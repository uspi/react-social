import React, { useState, useEffect } from "react"
//import style from "./ProfileStatus.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    let [tip, setTip] = useState(false);

    // after every render, if haven't dependencies
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        if (!props.isOwner) return;
        setEditMode(true);
        setTip(false);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const showStatusTip = () => {
        // TODO: replace by thunk and state prop
        setTimeout(() => setTip(true), 200)
    }

    const hideStatusTip = () => {
        setTip(false);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode && <div onMouseEnter={showStatusTip} onMouseLeave={hideStatusTip} onDoubleClick={activateEditMode}>
                {props.status || "_-_-_-_"}
            </div>}

            {editMode &&
                <div>
                    <input
                        onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                    />
                </div>
            }
            {/* {tip && props.isOwner &&
                <div className={style.profileStatusTip}>(?) double click for change</div>
            } */}
        </div>
    );
}

export default ProfileStatusWithHooks;