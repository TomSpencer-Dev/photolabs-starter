import { useState, useReducer, useEffect } from 'react';

export const ACTIONS = {
  SET_CURRENT_FAVORITE: 'SET_CURRENT_FAVORITE',
  SET_MODAL_STATE: 'SET_MODAL_STATE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  TOGGLE_MODAL_STATE: 'TOGGLE_MODAL_STATE',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

const useApplicationData = () => {

  const [currentFavorite, setCurrentFavorite] = useState({});

  const [modalState, setModalState] = useState(false);

  const [photoData, setPhotoData] = useState();

  const [topicData, setTopicData] = useState();

  const initialState = {
    currentFavorite: {},
    modalState: false,
    photoData: [],
    topicData: [],
  };

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.TOGGLE_MODAL_STATE:
        return { ...state, modalState: action.payload }; //payload is going to be false or a number(phot id)
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
    }
  }

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
    toggleModalState,
    topicData
  };
};

export default useApplicationData;
