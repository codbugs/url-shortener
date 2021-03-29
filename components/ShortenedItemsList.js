import ShortenedItemAllItemsHeaderRow from './ShortenedItemAllItemsHeaderRow.js';
import ShortenedItemPopularHeaderRow from './ShortenedItemPopularHeaderRow.js';
import ShortenedItemRow from './ShortenedItemRow.js';


import styles from './ShortenedItemsList.module.css';


export default function ShortenedItemsList(props) {

    const collection = props.items.map((item, index) => <ShortenedItemRow key={index} item={item} />);
    const isPopularVisible = true === props.popular;
    const areAllItemsVisible = true === props.allItems;

    return <ul className={styles.list}>
        {isPopularVisible && <ShortenedItemPopularHeaderRow />}
        {areAllItemsVisible && <ShortenedItemAllItemsHeaderRow />}
        {collection}
    </ul>;
}