export default function ShortenedItemDetail(props) {

    const { source, target } = props.item;

    return null !== props.item && <div>
        <ul>
            <li>Source: { source }</li>
            <li>Target: <a href={target}>{target}</a></li>
        </ul>
    </div>;
}