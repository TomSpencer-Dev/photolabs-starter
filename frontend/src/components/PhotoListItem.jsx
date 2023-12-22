import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ data, setFavorites, toggleModalState }) => {
  const { urls, user, location, profile, id } = data;

  return (
    <li className="photo-list__item"  >
      <PhotoFavButton id={id} setFavorites={setFavorites} />
      <img className="photo-list__image" src={urls.regular} alt={`General Image`} onClick={() => toggleModalState(data)} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile of ${user.username}`} />
        <div className="photo-list__user-info">
          <span>{user.username}</span>
          <span className="photo-list__user-location ">{`${location.city}, ${location.country}`}</span>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
