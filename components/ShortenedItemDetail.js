import { useState } from 'react';

import CopyToClipboardButton from './CopyToClipboardButton.js';
import NotifyClipboardResultsManager from './NotifyClipboardResultsManager.js';


export default function ShortenedItemDetail(props) {

    const { source, target } = props.item;

    const [clipboardResult, setClipboardResults] = useState(null);

    return null !== props.item && <div>
        <ul>
            <li>Source: { source }</li>
            <li>Target: <a href={target}>{target}</a></li>
            <li>
                <CopyToClipboardButton value={target} resolveAs={(value) => setClipboardResults(value)} />
                <NotifyClipboardResultsManager success={clipboardResult} />
            </li>
        </ul>
    </div>;
}