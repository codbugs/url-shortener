import ShortenedItemDetail from './ShortenedItemDetail.js';
import ShortenedNullDetail from './ShortenedNullDetail.js';

export default function ShortenedDetail(props) {
    
    const component = null === props.item
        ? <ShortenedNullDetail />
        : <ShortenedItemDetail item={props.item} />;

    return component;
}