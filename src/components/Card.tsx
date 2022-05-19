import React from "react";
import './Card.css';

type CardProps = {
    title: string;
    imgUrl: string;
    director: string;
    description: string;
}

export const Card = ( { title, imgUrl, director, description }: CardProps): JSX.Element => 
    <div className="card">
        <img src={imgUrl}/>
        <h2>{ title }</h2>
        <h3>Directed by { director } </h3>
        <p> { description } </p>
    </div>
;

