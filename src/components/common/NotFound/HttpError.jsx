import React from 'react';
import styles from "./HttpError.module.css"

const HttpError = ({
    httpCode, httpText = null, errorHeader = null, errorText = null
}) => (
    <div className={styles.container}>
        <div className={styles.httpContainer}>
            <div className={styles.httpCode}>{httpCode}</div>
            {httpText && <div className={styles.httpText}>{httpText}</div>}
        </div>
        {errorHeader && <div className={styles.errorHeader}>{errorHeader}</div>}
        {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
);

export { HttpError };