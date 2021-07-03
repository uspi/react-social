import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog =>
        <DialogItem id={dialog.id} name={dialog.name} />
    );
    let messagesElements = props.state.messages.map(message =>
        <Message text={message.text} />
    );
    let newMessageText = props.state.newMessageText;
    // func
    let updateNewMessageText = props.updateNewMessageText;

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        updateNewMessageText(text);
    }
    debugger;
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsArea}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
            </div>

            <div className={s.messagesArea}>
                <div className={s.messagesItems}>
                    {messagesElements}
                </div>

                <div className={s.newMessageBlock}>
                    <div className={s.textAreaContainer}>
                        <textarea ref={newMessageElement} onChange={onMessageChange} value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;