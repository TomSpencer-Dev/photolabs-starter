import { useState, useReducer, useEffect } from 'react';

export const ACTIONS = {
  SET_CURRENT_FAVORITE: 'SET_CURRENT_FAVORITE',
  SET_MODAL_STATE: 'SET_MODAL_STATE',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  TOGGLE_MODAL_STATE: 'TOGGLE_MODAL_STATE',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_FAVORITE: 'SET_FAVORITE',
  SET_TOPIC_ID: 'SET_TOPIC_ID',
  GET_PHOTOS_BY_TOPIC: 'GET_PHOTOS_BY_TOPICS'
};

const useApplicationData = () => {

  const initialState = {
    favorites: {},
    modalState: false,
    photoData: [],
    topicData: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

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


  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.TOGGLE_MODAL_STATE:
        return { ...state, modalState: action.payload }; //payload is going to be false or a number(phot id)
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      case ACTIONS.SET_FAVORITE:
        const newObj = { ...state };
        if (newObj.favorites[action.payload]) {
          delete newObj.favorites[action.payload];
          return newObj;
        }
        newObj.favorites[action.payload] = true;
        return newObj;
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };

    }
  }

  const toggleModalState = function(photo) {
    dispatch({ type: ACTIONS.TOGGLE_MODAL_STATE, payload: photo });
  };

  const setFavorites = function(photoID) {
    dispatch({ type: ACTIONS.SET_FAVORITE, payload: photoID });
  };

  const setTopic = function(topicID) {
    fetch(`http://localhost:8001/api/topics/photos/${topicID}`)
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }));
  };

  return {
    state,
    toggleModalState,
    setFavorites,
    setTopic
  };
};

export default useApplicationData;
