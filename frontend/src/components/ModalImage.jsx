import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const ModalImage = ({ data, setFavorites, toggleModalState }) => {
  const { urls, user, location, profile, id } = data;

  return (
    <div>
      <PhotoFavButton id={id} setFavorites={setFavorites} />
      <img className="photo-details-modal__image" src={urls.regular} alt={`General Image`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile of ${user.username}`} />
        <div className="photo-list__user-info">
          <span>{user.username}</span>
          <span className="photo-list__user-location">{`${location.city}, ${location.country}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
