import React, {useState} from 'react';
import styles from './index.module.css';

const ToggleText = () => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const onClickHandler = () => setIsTextVisible(!isTextVisible);

    return (
        <article className={styles['toggle-text']}>
            <button className={styles['btn-toggle-text-btn']} onClick={onClickHandler}>
                Toggle text visibility
            </button>
            {
                isTextVisible && 
                <p className={styles['toggle-text-paragraph']}>
                    Text is now visible.
                </p>
            }
        </article>
    )
};

export default ToggleText;