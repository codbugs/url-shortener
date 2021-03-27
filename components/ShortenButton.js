export default function ShortButton(props) {

    const short = () => {
        props.short && props.short();
    };

    return <a className={'button'} href="#" onClick={() => short()}>Shorten</a>;
}