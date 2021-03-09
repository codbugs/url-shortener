export default function NotifyClipboardResults(props) {
    
    const success = props.success;

    const failedMessage = <div>You must grant access to the clipboard</div>;
    const successMessage = <div>You've copied the shorten url</div>;
    
    return success ? successMessage : failedMessage;
}