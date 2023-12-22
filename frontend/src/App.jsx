import React, { useEffect, useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state,
    toggleModalState,
    setFavorites,
setTopic } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} toggleModalState={toggleModalState} favorites = {state.favorites} setFavorites = {setFavorites} setTopic = {setTopic} />
      {state.modalState && <PhotoDetailsModal favorites = {state.favorites} setFavorites = {setFavorites} photo = {state.modalState} toggleModalState={toggleModalState} photos = {state.photoData} />}
    </div>
  );
};

export default App;

