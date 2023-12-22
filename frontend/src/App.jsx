import React, { useEffect, useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
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
    toggleModalState,
    topicData } = useApplicationData();

  

  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} toggleModalState={toggleModalState} currentFavorite = {currentFavorite} setCurrentFavorite = {setCurrentFavorite}  />
      {state.modalState && <PhotoDetailsModal currentFavorite = {currentFavorite} setCurrentFavorite = {setCurrentFavorite} photo = {state.modalState} toggleModalState={toggleModalState} photos = {state.photoData} />}
    </div>
  );
};

export default App;

