import React, {useContext} from "react";
import UserContext from "../context/user-context";
import styles from './index.module.css';

const DisplayUserInfo = () => {
    const {username, email, city} = useContext(UserContext);

    return (
        <section className={styles['display-user-info']}>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>city: {city}</p>
        </section>
    )
};

export default DisplayUserInfo;