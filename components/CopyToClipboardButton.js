export default function CopyToClipboardButton(props) {

    const value = props.value;
    const sendResults = props.resolveAs;

    const handleClick = () => {
        navigator.clipboard.writeText(value)
            .then(() => sendResults(true))
            .catch(err => sendResults(false));
    };

    return <a className={'button'} href="javascript:void(0);" onClick={() => handleClick()}>Copy</a>;
}