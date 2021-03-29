import Link from 'next/link'

import styles from './ShortenedItemAllItemsHeaderRow.module.css';

export default function ShortenedItemAllItemsHeaderRow(props) {
    return <li className={styles.item}>
        <span className={styles.source}>All links</span>
    </li>;
}