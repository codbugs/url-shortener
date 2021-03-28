// frameworks imports
import { useState } from 'react';


// components imports
import MasterLayout from './core/MasterLayout.js';
import ShortenedDetail from './ShortenedDetail.js';
import ShortenedDetailError from './ShortenedDetailError.js';
import ShortenedItemsList from './ShortenedItemsList.js';
import ShortenForm from './ShortenForm.js';
import Title from './Title.js';


export default function ShortenSection(props) {

    let apiService = props.service;
    let [item, setItem] = useState(null);
    let [itemMessage, setItemMessage] = useState('');
    const shortenedCollection = props.items;

    const generateShortenUrl = (url) => {
        apiService.create({
            url: url
        })
        .then(shorten => {
            setItem(shorten);
            setItemMessage('');
        })
        .catch(err => {
            // FIX: json error when obtained the err object
            console.log(err);
            setItemMessage('Max items reached');
            setItem(null);
        });
    };

    return <MasterLayout>
        <Title />
        <ShortenForm shorten={(url) => generateShortenUrl(url)}/>
        <ShortenedDetail item={item} />
        <ShortenedDetailError message={itemMessage} />
        <ShortenedItemsList items={shortenedCollection} />
    </MasterLayout>;
}