import './Card.css';
import type { Work } from '../types/Work';

export const Card = ( work: Work): JSX.Element => 
    <div className="card">
        <h2>Movie Title: { work.movieTitle }</h2>
        <h3>Book Title: { work.bookTitle }</h3>
        <h3>Written by { work.bookAuthor } </h3>
        <p>Movie released in { work.movieReleaseYear }</p>
    </div>
;

