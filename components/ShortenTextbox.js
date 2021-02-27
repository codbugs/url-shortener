export default function ShortTextbox(props) {

    return <input type={'text'} value={props.value} onChange={(event) => props.change && props.change(event)} />;
}