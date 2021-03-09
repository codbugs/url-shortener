// frameworks imports
import { useEffect, useState } from 'react';

// components imports
import ShortenedDetail from './ShortenedDetail.js';
import ShortenedItemsList from './ShortenedItemsList.js';
import ShortenForm from './ShortenForm.js';
import Title from './Title.js';

// styles import
import styles from './ShortenSection.module.css';


export default function ShortenSection(props) {

    let apiService = props.service;
    let [item, setItem] = useState(null);
    let [shortenedCollection, setShortenedCollection] = useState([]);


    useEffect(() => {
        apiService.find().then(items => {
            setShortenedCollection(items);
        });
    }, [item]);


    const generateShortenUrl = (url) => {
        apiService.create({
            url: url
        }).then(shorten => {
            setItem(shorten);
        });
    };

    return <div className={styles.parent}>
        <div className={styles.container}>
            <Title />
            <ShortenForm shorten={(url) => generateShortenUrl(url)}/>
            <ShortenedDetail item={item} />
            <ShortenedItemsList items={shortenedCollection} />
        </div>
    </div>;
}