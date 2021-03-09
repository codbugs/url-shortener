export default function ShortButton(props) {

    const short = () => {
        props.short && props.short();
    };

    return <a className={'button'} href="javascript:void(0);" onClick={() => short()}>Shorten</a>;
}