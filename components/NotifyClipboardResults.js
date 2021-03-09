export default function NotifyClipboardResults(props) {
    
    const success = props.success;

    const failedMessage = <div className={'message error'}>You must grant access to the clipboard</div>;
    const successMessage = <div className={'message success'}>You've copied the shorten url</div>;
    
    return success ? successMessage : failedMessage;
}