import { Fragment } from 'react';

import styles from './ShortenedDetailError.module.css';


export default function ShortenedDetailError(props) {

    const message = props.message;
    const visible = message !== undefined && message !== null && message !== '';

    const component = <div className={styles.container}>
        <div className={styles.item}>
            <span className={styles.content}>
                <span className={styles.message}>{ message }</span>
            </span>
        </div>
    </div>;

    return visible ? component : <Fragment />;
}