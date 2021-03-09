import { useState } from 'react';

import CopyToClipboardButton from './CopyToClipboardButton.js';
import NotifyClipboardResultsManager from './NotifyClipboardResultsManager.js';


import styles from './ShortenedItemDetail.module.css';

export default function ShortenedItemDetail(props) {

    const { source, target } = props.item;

    const [clipboardResult, setClipboardResults] = useState(null);

    return null !== props.item && <div className={styles.container}>
        <div className={styles.item}>
            <span className={styles.content}>
                <span className={styles.source}>{source}</span>
                <span className={styles.target}><a target={'_blank'} href={target}>{target}</a></span>
                <div className={styles.actions}>
                    <CopyToClipboardButton value={target} resolveAs={(value) => setClipboardResults(value)} />
                    <NotifyClipboardResultsManager success={clipboardResult} />
                </div>
            </span>
        </div>
    </div>;
}