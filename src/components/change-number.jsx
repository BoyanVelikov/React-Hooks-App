import React, {useReducer} from 'react';
import styles from './index.module.css';

const initialCount = 0;
const reducer = (state, action) => {
    switch(action) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        case 'reset': return 0;
        default: alert('An error occurred');
    }
};

const ChangeNumber = () => {
    const [count, dispatch] = useReducer(reducer, initialCount);

    const incrementCount = () => dispatch('increment');
    const decrementCount = () => dispatch('decrement');
    const resetCount = () => dispatch('reset');

    return (
        <section className={styles['change-number']}>
            <p className={styles['change-number-text']}>
                Current count: {count}
            </p>
            <button className={styles['btn-change-number-btn']} onClick={incrementCount}>
                Increment button
            </button>
            <button className={styles['btn-change-number-btn']} onClick={decrementCount}>
                Decrement button
            </button>
            <button className={styles['btn-change-number-btn']} onClick={resetCount}>
                Reset button
            </button>
        </section>
    )
}

export default ChangeNumber;