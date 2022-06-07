import { Card } from './Card';
import { Work } from '../types/Work';
import './CardList.css';
import {useState, useEffect} from 'react';


export const CardList = (): JSX.Element => {

    const [error, setError] = useState<Error | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Work[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/works")
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result);
        },
        (error: Error) => {
            setIsLoaded(true);
            setError(error);
        }
             )
    }, []);

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul className='card-list'>
                { items.map((w, i) => {
                    return <li key={i} ><Card id={w.id} movieTitle={w.movieTitle} bookTitle={w.bookTitle} bookAuthor={w.bookAuthor} movieReleaseYear={w.movieReleaseYear}/></li>
                })}
            </ul> 
        );
    }
}
