import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import ModalImage from 'components/ModalImage';


const PhotoDetailsModal = ({ toggleModalState, setCurrentFavorite, currentFavorite, photoID, photos }) => {
const selectedPhoto = photos.filter(photo => photoID === photo.id)[0];
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModalState}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <ModalImage data={selectedPhoto} setCurrentFavorite = {setCurrentFavorite}  />
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList photos = {Object.values(photo.similar_photos)} setCurrentFavorite= {setCurrentFavorite} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
