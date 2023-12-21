import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModalState={toggleModalState} currentFavorite = {currentFavorite} setCurrentFavorite = {setCurrentFavorite}  />
      {modalState && <PhotoDetailsModal currentFavorite = {currentFavorite} setCurrentFavorite = {setCurrentFavorite} toggleModalState={toggleModalState} photo = {photoData} photos = {photos} />}
    </div>
  );
};

export default App;
