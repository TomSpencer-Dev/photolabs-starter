import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = ({data}) => {
  const { imageSource, username, location, profile, id } = data;

  return (
    <li className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={imageSource} alt={`General Image`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
        <p className="photo-list__user-info">{username}</p>
        <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
      </div>
    </li>
  );
};

export default PhotoListItem;
