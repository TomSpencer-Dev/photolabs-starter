import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={Object.entries(isFavPhotoExist).length !== 0} selected = {Object.entries(isFavPhotoExist).length !== 0}/>
    </div>
  ) 
};

export default FavBadge;