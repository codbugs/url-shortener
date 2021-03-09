import ShortenedItemRow from './ShortenedItemRow.js';

export default function ShortenedItemsList(props) {
    return <ul>
        {
            props.items && props.items.map(
                (item, index) => {
                    return <li key={index}>
                        <ShortenedItemRow item={item} />
                    </li>;
                })
        }  
    </ul>;
}