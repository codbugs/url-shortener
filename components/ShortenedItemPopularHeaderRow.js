import Link from 'next/link'

import styles from './ShortenedItemPopularHeaderRow.module.css';

export default function ShortenedItemHeaderRow(props) {
    return <li className={styles.item}>
        <span className={styles.source}>Popular links</span>
        <span className={styles.target}><Link href="/links"><a>See all</a></Link></span>
    </li>;
}