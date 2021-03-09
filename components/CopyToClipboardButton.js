export default function CopyToClipboardButton(props) {

    const value = props.value;
    const sendResults = props.resolveAs;

    const handleClick = () => {
        navigator.clipboard.writeText(value)
            .then(() => sendResults(true))
            .catch(err => sendResults(false));
    };

    return <button type={'button'} onClick={() => handleClick()}>Copy</button>;
}