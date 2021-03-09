import NotifyClipboardResults from './NotifyClipboardResults.js';

export default function NotifyClipboardResultsManager(props) {

    const success = props.success;

    return null === success
        ? <></>
        : <NotifyClipboardResults success={success} />;
}