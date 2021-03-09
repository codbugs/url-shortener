import styles from './ShortenedItemHeaderRow.module.css';

export default function ShortenedItemHeaderRow(props) {
    return <li className={styles.item}>
        <span className={styles.source}>Popular links</span>
        <span className={styles.target}><a href="">See all</a></span>
    </li>;
}