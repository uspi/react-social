import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>

            {/* <div className={s.cover_img}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="page top cover" />
            </div> */}

            <div className={s.userInfoContainer}>
                <div className={s.userMainInfo}>
                    <div className={s.avatar}>
                        <img src={props.profile.photos.small} alt="user avatar" />
                    </div>
                    <div className={s.descriptionContainer}>
                        <div className={s.userName}>{props.profile.fullName}</div>
                        <div className={s.userDescription}>{props.profile.aboutMe}</div>
                    </div>
                </div>

                <div className={s.job}>
                    {
                        props.profile.lookingForAJob ?
                            <div>Looking for a job</div>
                            : null
                    }

                </div>
                <div className={s.userSocial}>

                </div>
                <div>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;