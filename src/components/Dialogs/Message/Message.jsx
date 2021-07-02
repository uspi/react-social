import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
    let text = props.text;

    let isOwner = false;

    // items style
    let messageItemStyle = isOwner ?
        `${s.messageItemOwner}` :
        `${s.messageItem}`
        ;

    // message container style
    let messageContainerStyle = isOwner ?
        `${s.messageContainerOwner}` :
        `${s.messageContainer}`
        ;

    // avatar container style
    let avatarContainerStyle = isOwner ?
        `${s.avatarContainerOwner}` :
        `${s.avatarContainer}`
        ;

    return (
        <div className={messageItemStyle}>
            <div className={avatarContainerStyle}>
                <div className={s.avatar}>
                    <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/111554483/original/83d513acbc4b3716c9a474086bb633a5de3c2d74/create-social-media-avatars-in-minimalist-style.jpg" />
                </div>
            </div>

            <div className={messageContainerStyle}>
                <div>
                    User Name
                </div>
                <div className={s.messageTextContainer}>
                    {text}
                </div>
            </div>
        </div>

    );
}

export default Message;