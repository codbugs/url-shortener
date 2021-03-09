import { useState } from 'react';

import CopyToClipboardLink from './CopyToClipboardLink.js';
import NotifyClipboardResultsManager from './NotifyClipboardResultsManager.js';

import styles from './ShortenedItemRow.module.css';


export default function ShortenedItemRow(props) {

    const [clipboardResult, setClipboardResults] = useState(null);
    
    return <li className={styles.item}>
        <span className={styles.clicks}>{props.item.clicks} <em>clicks</em></span>
        <span className={styles.content}>
            <span className={styles.source}>{props.item.source}</span>
            <span className={styles.target}>Short: <a target={'_blank'} href={props.item.target}>{props.item.target}</a></span>
            <div className={styles.actions}>
                <a target={'_blank'} href={props.item.target}>Open</a>
                <CopyToClipboardLink value={props.item.target} resolveAs={(value) => setClipboardResults(value)} />
                <NotifyClipboardResultsManager success={clipboardResult} />
            </div>
        </span>
    </li>;
}