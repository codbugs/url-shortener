// frameworks imports
import { useEffect, useState } from 'react';


// components imports
import ShortenedDetail from './ShortenedDetail.js';
import ShortenedDetailError from './ShortenedDetailError.js';
import ShortenedItemsList from './ShortenedItemsList.js';
import ShortenForm from './ShortenForm.js';
import Title from './Title.js';


// styles import
import styles from './ShortenSection.module.css';


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

    return <div className={styles.parent}>
        <div className={styles.container}>
            <Title />
            <ShortenForm shorten={(url) => generateShortenUrl(url)}/>
            <ShortenedDetail item={item} />
            <ShortenedDetailError message={itemMessage} />
            <ShortenedItemsList items={shortenedCollection} />
        </div>
    </div>;
}