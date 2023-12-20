import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavoritePhoto = function() {
    setIsFavorited(prev => !prev);
    props.setCurrentFavorite(prev => {
      const newObj = {...prev};
      if (newObj[props.id]) {
        delete newObj[props.id];
        return newObj;
      }
      newObj[props.id] = true;
      return newObj;
    });
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