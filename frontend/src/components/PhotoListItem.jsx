import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ data, setCurrentFavorite, toggleModalState }) => {
  const { urls, user, location, profile, id } = data;
  
    return (
      <li className="photo-list__item"  >
        <PhotoFavButton id={id} setCurrentFavorite={setCurrentFavorite} />
        <img className="photo-list__image" src={urls.regular} alt={`General Image`} onClick={() =>toggleModalState(data)} />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={user.profile} alt={`Profile of ${user.username}`} />
          <p className="photo-list__user-info">{user.username}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </li>
    );
  };

  export default PhotoListItem;
