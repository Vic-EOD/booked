import React from "react";

type CardProps = {
    title: string;
    imgUrl: string;
    director: string;
    description: string;
}

export const Card = ( { title, imgUrl, director, description }: CardProps): JSX.Element => 
    <div>
        <img src={imgUrl}/>
        <h2>{ title }</h2>
        <h3>Directed by { director } </h3>
        <p> { description } </p>
    </div>
;

