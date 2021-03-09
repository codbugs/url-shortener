import styles from './ShortenButton.module.css';

export default function ShortButton(props) {

    const short = () => {
        props.short && props.short();
    };

    return <a className={styles.shorten} href="javascript:void(0);" onClick={() => short()}>Shorten</a>;
}