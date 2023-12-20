import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

function HomeRoute(props) {
const [currentFavorite, setCurrentFavorite] = useState({})

  return (
    <div className="home-route">
      <TopNavigationBar topics = {props.topics} currentFavorite = {currentFavorite} />
      <PhotoList setCurrentFavorite = {setCurrentFavorite}  photos = {props.photos} toggleModalState = {props.toggleModalState}  />
    </div>
  );
}

export default HomeRoute;
