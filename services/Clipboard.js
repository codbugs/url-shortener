export default function Clipboard() {
    return {
        copyTo(value) {
            return navigator.clipboard.writeText(value);
        }
    };
}