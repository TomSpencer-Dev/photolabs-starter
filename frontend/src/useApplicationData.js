import { useState} from 'react';

const useApplicationData = () => {
  const [currentFavorite, setCurrentFavorite] = useState({});

  const [modalState, setModalState] = useState(false);

  const [photoData, setPhotoData] = useState();

  const toggleModalState = function(photo) {
    setModalState(prev => !prev);
    setPhotoData(photo);
  };

  return {
    currentFavorite,
    setCurrentFavorite,
    modalState,
    photoData,
    toggleModalState
  };
};

export default useApplicationData;



