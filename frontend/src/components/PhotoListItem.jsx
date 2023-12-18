import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  const { imageSource, username, location, profile, id } = props.data;
  return (
    <li key={id} className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`General Image`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
        <p className="photo-list__user-info">{username}</p>
        <p className="photo-list_user-location">{`${location.city}, ${location.country}`}</p>
      </div>
    </li>
  );
};

export default PhotoListItem;
