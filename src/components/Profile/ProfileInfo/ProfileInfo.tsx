import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import userPhoto from "./../../../assets/images/user-no-photo.png";
//import cn from "classnames/bind"
import { ProfileDescriptionFormRedux } from "./ProfileDescription/ProfileDescriptionForm";
import { ProfileDescription } from "./ProfileDescription/ProfileDescription";
import { ProfileType } from "../../../types/types";

//const cx = cn.bind(style);
export type PropsType = {
  isOwner: boolean;
  profile: ProfileType | null;
  status: string;
  
  saveProfile: (profile: ProfileType) => Promise<void>;
  saveUserPhoto: (file: File) => void;
  updateUserStatus: (status: string) => void;
};

const ProfileInfo: React.FC<PropsType> = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onUserPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    props.saveUserPhoto(e.target.files[0]);
  };

  const onDescriptionFormSubmit = (formData: any) => {
      // TODO: remove async operation from component
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div className={style.profileInfo}>
      <div className={style.userInfoContainer}>
        {/* main info */}
        <div className={style.flexContainer_row}>
          <div>
            <div className={style.userPhoto}>
              <img
                src={props.profile.photos.large || userPhoto}
                alt="user avatar"
              />
            </div>
            {props.isOwner && (
              <input type={"file"} onChange={onUserPhotoSelected} />
            )}
          </div>
          {editMode ? (
            <ProfileDescriptionFormRedux
              initialValues={props.profile}
              onSubmit={onDescriptionFormSubmit}
              profile={props.profile}
              isOwner={props.isOwner}
              status={props.status}
              updateUserStatus={props.updateUserStatus}
            />
          ) : (
            <ProfileDescription
              profile={props.profile}
              isOwner={props.isOwner}
              status={props.status}
              updateUserStatus={props.updateUserStatus}
              activateEditMode={() => setEditMode(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
