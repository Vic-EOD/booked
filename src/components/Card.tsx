import React from "react";

type CardProps = {
    title: string;
}
export const Card = ( { title }: CardProps): JSX.Element => <div>{ title }</div>;

