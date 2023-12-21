import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state,
    dispatch,
    currentFavorite,
    setCurrentFavorite,
    modalState,
    photoData,
    toggleModalState } = useApplicationData();

// const setCurrentFavorite = (photoId) => {
//     dispatch({ type: ACTIONS.SET_CURRENT_FAVORITE, payload: { id: photoId } });
//   };

  // const toggleModalState = (photo) => {
  //   // If opening the modal with a photo
  //   if (photo) {
  //     dispatch({ type: ACTIONS.TOGGLE_MODAL_STATE, payload: { photoData: photo } });
  //   } else {
  //     // If closing the modal
  //     dispatch({ type: ACTIONS.TOGGLE_MODAL_STATE, payload: { photoData: null } });
  //   }
  // };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModalState={toggleModalState} currentFavorite = {currentFavorite} setCurrentFavorite = {setCurrentFavorite}  />
      {state.modalState && <PhotoDetailsModal currentFavorite = {currentFavorite} setCurrentFavorite = {setCurrentFavorite} toggleModalState={toggleModalState} photo = {state.photoData} photos = {photos} />}
    </div>
  );
};

export default App;
