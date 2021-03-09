import styles from './ShortenedItemRow.module.css';


export default function ShortenedItemRow(props) {
    return <li className={styles.item}>
        <span className={styles.clicks}>99 <em>clicks</em></span>
        <span className={styles.content}>
            <span className={styles.source}>{props.item.source}</span>
            <span className={styles.target}>Short: <a target={'_blank'} href={props.item.target}>{props.item.target}</a></span>
            <div className={styles.actions}>
                <a target={'_blank'} href={props.item.target}>Open</a>
                <a >Copy</a>
            </div>
        </span>
    </li>;
}