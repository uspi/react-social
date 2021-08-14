import React from "react";
import style from "./ProfileDescriptionForm.module.css";
import ProfileStatusWithHooks from "./../ProfileStatus/ProfileStatusWithHooks";
import cn from "classnames/bind"
import { createField, Input, Textarea } from "../../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import formStyle from "./../../../common/FormsControls/FormsControls.module.css"

const cx = cn.bind(style);

const ProfileDescriptionForm = ({
    handleSubmit, profile, isOwner, status,
    updateUserStatus, activateEditMode, error
}) => {
    return (
        <form onSubmit={handleSubmit} className={style.descriptionContainer}>

            <div className={style.flexContainer_column}>
                <div className={style.font_w700}>Full Name:&nbsp;</div>
                <div>{createField("Full Name", "fullName", null, Input)}</div>
            </div>


            <div className={style.flexContainer_row}>
                <div className={style.font_w700}>Description:&nbsp;</div>
                <div className={style.userDescription}>{profile.aboutMe}</div>
            </div>

            <div className={style.flexContainer_row}>
                <div className={style.font_w700}>Status:&nbsp;</div>
                <ProfileStatusWithHooks isOwner={isOwner} status={status} updateUserStatus={updateUserStatus} />
            </div>

            <div className={style.flexContainer_row}>
                <div className={style.font_w700}>Looking For A Job:&nbsp;</div>
                <div>{createField("", "lookingForAJob", [], Input, { type: "checkbox" })}</div>
            </div>

            {
                <div className={style.flexContainer_column}>
                    <div className={style.font_w700}>My Skills:&nbsp;</div>
                    <div>{createField("My professional skills", "lookingForAJobDescription", [], Textarea)}</div>
                </div>
            }


            {
                <div className={style.flexContainer_column}>
                    <div className={style.font_w700}>About me:&nbsp;</div>
                    <div>{createField("About me", "aboutMe", [], Textarea)}</div>
                </div>
            }

            <div className={style.flexContainer_column}>
                <b>Contacts:&nbsp;</b>
                <div className={cx({ contactList: true })}>
                    {
                        Object.keys(profile.contacts).map(key => {
                            //return <ProfileDescriptionContact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                            return <div key={key} className={style.flexContainer_row}>
                                <b>{key}:&nbsp;{createField(key, "contacts." + key, [], Input)}</b>
                            </div>
                        })
                    }
                </div>

            </div>

            {error &&
                <div className={formStyle.formSummaryError}>
                    {error}
                </div>}
            <button onClick={activateEditMode}>save</button>

        </form>
    );
}

const ProfileDescriptionFormRedux = reduxForm({
    form: "edit-profile-description"
})(ProfileDescriptionForm);

export {
    ProfileDescriptionFormRedux
}