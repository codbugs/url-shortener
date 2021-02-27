export default function ShortenedItemRow(props) {
    return <div>
        <span>Source: {props.item.source}</span>
        <span>Target: <a href={props.item.target}>{props.item.target}</a></span>
    </div>;
}