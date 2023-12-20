import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, setCurrentFavorite, toggleModalState }) => {
  const photoListItems = photos.map((photo) => {
    return <PhotoListItem key={photo.id} data={photo} setCurrentFavorite ={setCurrentFavorite} toggleModalState = {toggleModalState} />;
  });
  return (
    <ul className="photo-list">
      {photoListItems}
    </ul>
  );
};

export default PhotoList;
