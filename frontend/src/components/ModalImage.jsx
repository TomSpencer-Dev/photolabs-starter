import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

//ModalImage displays the photo and user details
const ModalImage = ({ data, setFavorites, favorites }) => {
  const { urls, user, location, id } = data;
console.log("DATA: ",data)
console.log("PHOTOFAV:",id, favorites)
  return (
    <div>
      <PhotoFavButton id={id} setFavorites={setFavorites} favorites = {favorites} />
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
