import { useState } from 'react';

import ShortenButton from './ShortenButton.js';
import ShortenTextbox from './ShortenTextbox.js';

export default function ShortenForm(props) {

    let [source, setSource] = useState('');

    const changeSource = (e) => {
        let newSource = e.target.value;
        setSource(newSource);
    };

    const shortUrl = () => { props.shorten && props.shorten(source) };

    return <div>
        <ShortenTextbox value={source} change={(e) => changeSource(e)} />
        <ShortenButton short={() => shortUrl()}/>
    </div>;
}