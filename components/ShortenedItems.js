import ShortenedItemsList from './ShortenedItemsList.js';
import ShortenedItemsEmptyList from './ShortenedItemsEmptyList.js';

export default function ShortenedItems(props) {

    const items = props.items || [];

    const isEmpty = 0 === items.lenght;
    
    return isEmpty ? <ShortenedItemsList items={items} /> : <ShortenedItemsEmptyList />;
}