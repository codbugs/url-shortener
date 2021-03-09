import ShortenedItemHeaderRow from './ShortenedItemHeaderRow.js';
import ShortenedItemRow from './ShortenedItemRow.js';


import styles from './ShortenedItemsList.module.css';


export default function ShortenedItemsList(props) {

    const collection = props.items.map((item, index) => <ShortenedItemRow key={index} item={item} />);

    return <ul className={styles.list}>
        <ShortenedItemHeaderRow />
        {collection}
    </ul>;
}