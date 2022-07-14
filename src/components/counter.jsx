import React, {useState, useEffect} from "react";
import styles from './index.module.css';

const Counter = () => {
 
    const [count, setCount] = useState(0);

    const incrementCount = () => setCount(count + 1);

    useEffect(() => {
        document.title = `Current count: ${count}`;
    }, [count]);

    return (
        <section className={styles['counter']}>
            <p className={styles['counter-text']}>
                Current count: {count}
            </p>
            <button className={styles['btn-counter-increment-btn']} onClick={incrementCount}>
                Increment count
            </button>
        </section>
    )
};

export default Counter;