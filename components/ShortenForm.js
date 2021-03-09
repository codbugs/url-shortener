import { useState } from 'react';

import ShortenButton from './ShortenButton.js';
import ShortenTextbox from './ShortenTextbox.js';

import styles from './ShortenForm.module.css';

export default function ShortenForm(props) {

    let [source, setSource] = useState('');

    const changeSource = (e) => {
        let newSource = e.target.value;
        setSource(newSource);
    };

    const shortUrl = () => { props.shorten && props.shorten(source) };

    return <div className={styles.form}>
        <div className={styles.field}>
            <label className={styles.label}>Type the url to short:</label>
            <div className={styles.control}>
                <div className={styles.input}>
                    <ShortenTextbox value={source} change={(e) => changeSource(e)} />
                </div>
                <ShortenButton short={() => shortUrl()}/>
            </div>
        </div>
    </div>;
}