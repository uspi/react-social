import React from "react";
import style from "./ProfileDescription.module.css";
import ProfileStatusWithHooks from "./../ProfileStatus/ProfileStatusWithHooks";
import cn from "classnames/bind"
import { ProfileDescriptionContact } from "./ProfileDescriptionContact/ProfileDescriptionContact";

const cx = cn.bind(style);

const ProfileDescription = ({ profile, isOwner, status, updateUserStatus, activateEditMode }) => {
    return (
        <div className={style.descriptionContainer}>
            <div className={style.userName}>{profile.fullName}</div>

            {isOwner && <button onClick={activateEditMode}>edit</button>}
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
                {
                    profile.lookingForAJob ?
                        <div>Yes</div>
                        : <div>Nope</div>
                }
            </div>

            {
                profile.lookingForAJob &&
                <div className={style.flexContainer_row}>
                    <div className={style.font_w700}>My Skills:&nbsp;</div>
                    <div>{profile.lookingForAJobDescription}</div>
                </div>
            }


            {
                profile.aboutMe &&
                <div className={style.flexContainer_row}>
                    <div className={style.font_w700}>About me:&nbsp;</div>
                    <div>{profile.aboutMe}</div>
                </div>
            }

            <div className={style.flexContainer_column}>
                <b>Contacts:&nbsp;</b>
                <div className={cx({ contactList: true })}>
                    {
                        Object.keys(profile.contacts).map(key => {
                            return <ProfileDescriptionContact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                        })
                    }
                </div>

            </div>

        </div>
    );
}

export {
    ProfileDescription
}