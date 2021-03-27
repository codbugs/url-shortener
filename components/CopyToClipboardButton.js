import Clipboard from '../services/Clipboard.js';

export default function CopyToClipboardButton(props) {

    const value = props.value;
    const sendResults = props.resolveAs;

    const handleClick = () => {
        new Clipboard().copyTo(value)
            .then(() => sendResults(true))
            .catch(err => sendResults(false));
    };

    return <a className={'button'} href="#" onClick={() => handleClick()}>Copy</a>;
}