import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import ModalImage from 'components/ModalImage';

//PhotoDetailsModal is the card that displays photo details when a photo is selected
const PhotoDetailsModal = ({ toggleModalState, setFavorites, photo, favorites}) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => toggleModalState({})}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <ModalImage data={photo} setFavorites={setFavorites} favorites = {favorites} />
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList photos={Object.values(photo.similar_photos)} setFavorites={setFavorites} favorites ={favorites} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
