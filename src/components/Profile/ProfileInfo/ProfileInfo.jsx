import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onUserPhotoSelected = (e) => {
        if (!e.target.files.length) return;

        props.saveUserPhoto(e.target.files[0]);
    }

    return (
        <div className={style.profileInfo}>
            <div className={style.userInfoContainer}>
                <div className={style.userMainInfo}>
                    <div className={style.avatar}>
                        <img src={props.profile.photos.small} alt="user avatar" />
                {/* main info */}
                <div className={style.flexContainer_row}>
                    <div>
                        <div className={style.userPhoto}>
                            <img src={props.profile.photos.large || userPhoto} alt="user avatar" />
                        </div>
                        {props.isOwner && <input type={"file"} onChange={onUserPhotoSelected} />}
                    </div>
                    <div className={style.descriptionContainer}>
                        <div className={style.userName}>{props.profile.fullName}</div>
                        <div className={style.userDescription}>{props.profile.aboutMe}</div>
                    </div>
                </div>

                <div className={style.job}>
                    {
                        props.profile.lookingForAJob ?
                            <div>Looking for a job</div>
                            : null
                    }

                </div>
                <div className={style.userSocial}>

                </div>
                <div>
                    <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;