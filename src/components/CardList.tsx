import { Card } from './Card';
import { Work } from '../types/Work';
import React from 'react';

const works: Work[] = [
    { id: '1', movieTitle: 'The Prestige', bookTitle: 'The Prestige', bookAuthor: 'Chistopher Priest', movieReleaseYear: 2006 },
    { id: '2', movieTitle: 'The Girl with the Dragon Tattoo', bookTitle: 'The Girl with the Dragon Tattoo', bookAuthor: 'Stieg Larsson', movieReleaseYear: 2011 },
    { id: '3', movieTitle: 'Arrival', bookTitle: 'Stroy of Your Life', bookAuthor: 'Ted Chiang', movieReleaseYear: 2016 }
]

export const CardList = (worksList: Work[]): JSX.Element =>
    <ul>
        { worksList.map(w => {
            return <li><Card id={w.id} movieTitle={w.movieTitle} bookTitle={w.bookTitle} bookAuthor={w.bookAuthor} movieReleaseYear={w.movieReleaseYear}/></li>
        })}
    </ul>
;
