export default function ShortButton(props) {

    const short = () => {
        props.short && props.short();
    };

    return <button type={'button'} onClick={() => short()}>Shorten</button>;
}