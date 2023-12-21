import { useState, useReducer } from 'react';

export const ACTIONS = {
  SET_CURRENT_FAVORITE: 'SET_CURRENT_FAVORITE',
  SET_MODAL_STATE: 'SET_MODAL_STATE',
  SET_PHOTO_DATA: 'SET_MODAL_DATA',
  TOGGLE_MODAL_STATE: 'TOGGLE_MODAL_STATE'
};

const useApplicationData = () => {

  const [currentFavorite, setCurrentFavorite] = useState({});

  const [modalState, setModalState] = useState(false);

  const [photoData, setPhotoData] = useState();

  const initialState = {
    currentFavorite: {},
    modalState: false,
    photoData: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.SET_CURRENT_FAVORITE:
        return { ...state, currentFavorite: action.payload };
      case ACTIONS.SET_MODAL_STATE:
        return { ...state, modalState: action.payload };
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.TOGGLE_MODAL_STATE:
        return { ...state, modalState: !state.modalState, photoData: action.payload || null };
    }
  }
console.log("OUtside Reducer: ", state)
  const toggleModalState = function(photo) {
    dispatch({ type: ACTIONS.TOGGLE_MODAL_STATE, payload: photo });
  };
  return {
    state,
    dispatch,
    currentFavorite,
    setCurrentFavorite,
    modalState,
    photoData,
    toggleModalState
  };
};

// const toggleModalState = function(photo) {
//   setModalState(prev => !prev);
//   setPhotoData(photo);
// };

// return {
//   currentFavorite,
//   setCurrentFavorite,
//   modalState,
//   photoData,
//   toggleModalState
// };
// };

export default useApplicationData;
