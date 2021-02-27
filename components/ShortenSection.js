// frameworks imports
import { useEffect, useState } from 'react';

// components imports
import ShortenedDetail from './ShortenedDetail.js';
import ShortenedItemsList from './ShortenedItemsList.js';
import ShortenForm from './ShortenForm.js';


export default function ShortenSection(props) {

    let shortenedService = props.shortenedService;
    let [item, setItem] = useState(null);
    let [shortenedCollection, setShortenedCollection] = useState([]);


    useEffect(() => {
        const items = shortenedService.find();
        setShortenedCollection(items);
    }, []);


    const generateShortenUrl = (url) => {
        const item = shortenedService.create(url);
        setItem(item);

        const items = shortenedService.find();
        setShortenedCollection(items);
    };

    return <div>
        <ShortenForm shorten={(url) => generateShortenUrl(url)}/>
        <ShortenedDetail item={item} />
        <ShortenedItemsList items={shortenedCollection} />
    </div>;
}