import { useEffect, useState } from 'react';

import CopyToClipboardLink from './CopyToClipboardLink.js';
import NotifyClipboardResultsManager from './NotifyClipboardResultsManager.js';

import styles from './ShortenedItemRow.module.css';


export default function ShortenedItemRow(props) {

    const [clipboardResult, setClipboardResults] = useState(null);
    let [shortenUrl, setShortenUrl] = useState(null);

    useEffect(() => {
        const location = window.location;
        const currentDomain = `${location.protocol}//${location.hostname}:${location.port}`;
        setShortenUrl(`${currentDomain}/${props.item.target}`);
    }, [props]);
    
    return <li className={styles.item}>
        <span className={styles.clicks}>{props.item.clicks} <em>clicks</em></span>
        <span className={styles.content}>
            <span className={styles.source}>{props.item.source}</span>
            <span className={styles.target}>Short: <a target={'_blank'} href={shortenUrl}>{shortenUrl}</a></span>
            <div className={styles.actions}>
                <a target={'_blank'} href={shortenUrl}>Open</a>
                <CopyToClipboardLink value={shortenUrl} resolveAs={(value) => setClipboardResults(value)} />
                <NotifyClipboardResultsManager success={clipboardResult} />
            </div>
        </span>
    </li>;
}