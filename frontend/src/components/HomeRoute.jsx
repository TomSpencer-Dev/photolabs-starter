import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

function HomeRoute(props) {
const [currentFavorite, setCurrentFavorite] = useState({})

  return (
    <div className="home-route">
      <TopNavigationBar topics = {props.topics} currentFavorite = {currentFavorite} />
      <PhotoList setCurrentFavorite = {setCurrentFavorite}  photos = {props.photos}  />
    </div>
  );
}

export default HomeRoute;