import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavoritePhoto = function() {
    setIsFavorited(prev => !prev);
    props.setFavorites(props.id);
  };
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavoritePhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;