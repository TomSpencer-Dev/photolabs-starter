import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const ModalImage = ({ data, setCurrentFavorite, toggleModalState }) => {
  const { urls, user, location, profile, id } = data;
  
    return (
      <div>
        <PhotoFavButton id={id} setCurrentFavorite={setCurrentFavorite}  />
        <img className="photo-details-modal__image" src={urls.regular} alt={`General Image`} />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={user.profile} alt={`Profile of ${user.username}`} />
          <p className="photo-list__user-info">{user.username}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    );
  };

  export default ModalImage;
