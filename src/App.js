import React from 'react';
import './App.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';



function MediaContainer(props) {
  const [favorite, setfavourite] =useState(false);
  function handleFavorite() {
    if(favorite===false){
     alert('Added to favourite');
     setfavourite(true);
    }
    else{
      alert('Removed from favourite');
     setfavourite(false);
    }
  }

  function renderMedia() {
    if (props.type === 'image') {
      return <img src={props.src} alt={props.alt} />;
    } else if (props.type === 'gif') {
      return <img src={props.src} alt={props.alt} />;
    } else if (props.type === 'video') {
      return (
        <video controls>
          <source src={props.src} type={props.type} />
        </video>
      );
    } else {
      return <p>Invalid media type</p>;
    }
  }

  return (
    
    <div className="media-container">
      {!favorite&&(
      <div className="favorite-icon" onClick={handleFavorite}>
        <FavoriteBorderIcon/>
      </div>)}
      {favorite&&(
      <div className="favorite-icon" onClick={handleFavorite}>
        <FavoriteIcon/>
      </div>)}
      {renderMedia()}
    </div>
    
  );
}

function App() {
  return (
    <div className="app">
      <MediaContainer
        type="gif"
        src="https://images.ctfassets.net/l3l0sjr15nav/NCqT6EmgLiydETEgvagXG/24e1571ad345881afc6e775bf6f86a82/200611-EN-GIF-GIFs-Rule.gif"
        alt="There is a gif here"
      />
      <h1 className="title">This is a dummy title</h1>
    </div>
  );
}

export default App;