import React, {useState} from "react";
import { useDocumentTitle } from "../hooks/use-document-title";
import styles from './index.module.css';

const SecondCounter = () => {
 
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 1);
    const text = `Current count: ${count}`;

    useDocumentTitle(text);

    return (
        <section className={styles['counter']}>
            <p className={styles['counter-text']}>
                Current count: {count}
            </p>
            <button className={styles['btn-counter-increment-btn']} onClick={incrementCount}>
                Increment count with custom hook
            </button>
        </section>
    )
};

export default SecondCounter;