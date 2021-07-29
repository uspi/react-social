import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={style.profileInfo}>
            <div className={style.userInfoContainer}>
                <div className={style.userMainInfo}>
                    <div className={style.avatar}>
                        <img src={props.profile.photos.small} alt="user avatar" />
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