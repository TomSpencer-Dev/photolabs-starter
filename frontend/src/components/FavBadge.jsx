import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

//FavBadge icon displays in NavBar if photos have been favorited
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={Object.entries(isFavPhotoExist).length !== 0} selected = {Object.entries(isFavPhotoExist).length !== 0}/>
    </div>
  ) 
};

export default FavBadge;