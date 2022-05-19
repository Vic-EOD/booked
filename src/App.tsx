import React from 'react';
import './App.css';
import { Card } from './components/Card';

const movie = {
    title: "The Departed",
    imgUrl: "https://a.ltrbxd.com/resized/sm/upload/jr/th/pu/pb/laefkgrfa3oKwvBtWTBtf2suiI4-0-230-0-345-crop.jpg?k=6dfd45925a" ,
    director: "Martin Scorsese",
    description: "Very good movie directed by Martin Scorsese starring Leonardo DiCaprio, Matt Damon, Mark Wahlberg, and Jack Nicholson."
};

function App() {
  return (
      <div className="App">
          <Card
            title = {movie.title}
            imgUrl = {movie.imgUrl}
            director = {movie.director}
            description = {movie.description}
          />
      </div>
  );
}

export default App;
