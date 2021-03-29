import Link from 'next/link'

import styles from './ShortenedItemAllItemsHeaderRow.module.css';

export default function ShortenedItemAllItemsHeaderRow(props) {
    return <li className={styles.item}>
        <span className={styles.source}>All links</span>
        <span className={styles.target}><Link href="/"><a>Back to Home</a></Link></span>
    </li>;
}