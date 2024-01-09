import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

//PhotoList imports photos and states and creates an array of photos and their corresponding data
const PhotoList = ({ photos, setFavorites, toggleModalState, favorites }) => {


  const photoListItems = photos.map((photo) => {
    return <PhotoListItem key={photo.id} data={photo} setFavorites={setFavorites} toggleModalState={toggleModalState} favorites = {favorites} />;
  });
  return (
    <ul className="photo-list">
      {photoListItems}
    </ul>
  );
};

export default PhotoList;
