import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

const buttonClick = function () {
console.log("Button Clicked")
}
  return (
    <div className="photo-list__fav-icon" onClick = {buttonClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
      </div>
    </div>
  );
}

export default PhotoFavButton;