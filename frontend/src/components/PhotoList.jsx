import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, setFavorites, toggleModalState }) => {

  const photoListItems = photos.map((photo) => {
    return <PhotoListItem key={photo.id} data={photo} setFavorites ={setFavorites} toggleModalState = {toggleModalState} />;
  });
  return (
    <ul className="photo-list">
      {photoListItems}
    </ul>
  );
};

export default PhotoList;
