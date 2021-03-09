import Clipboard from '../services/Clipboard.js';

export default function CopyToClipboardLink(props) {

    const value = props.value;
    const sendResults = props.resolveAs;

    const handleClick = () => {
        new Clipboard().copyTo(value)
            .then(() => sendResults(true))
            .catch(err => sendResults(false));
    };

    return <a href="javascript:void(0);" onClick={() => handleClick()}>Copy</a>;
}