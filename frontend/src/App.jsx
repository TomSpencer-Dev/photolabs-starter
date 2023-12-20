import React, { useState } from 'react';

import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modalState, setModalState] = useState(false);
  const [photoData, setPhotoData] = useState();
  const toggleModalState = function(photo) {
    setModalState(prev => !prev);
    setPhotoData(photo);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} toggleModalState={toggleModalState} />
      {modalState && <PhotoDetailsModal toggleModalState={toggleModalState} />}
    </div>
  );
};

export default App;
