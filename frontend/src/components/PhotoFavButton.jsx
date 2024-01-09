import React, { useCallback, useEffect, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

//PhotoFavButton displays the heart icon button on the corner of each photo
function PhotoFavButton(props) {

  const { favorites, id } = props;
  
  const checkFav = (id, favorites) => {
    if (favorites && id in favorites) {
      return true;
    } else { return false; }

  };
  const [selected, setSelected] = useState(checkFav(id, favorites));

  const toggleFavoritePhoto = function() {
    props.setFavorites(id);

  };

  useEffect(() => {
console.log("Line 24:", favorites, id);
    setSelected(checkFav(id, favorites));

  }, [favorites]);

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavoritePhoto}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;