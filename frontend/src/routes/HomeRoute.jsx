import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

function HomeRoute(props) {
  return (
    <div className="home-route">
      <TopNavigationBar topics = {props.topics} currentFavorite = {props.currentFavorite} />
      <PhotoList setCurrentFavorite = {props.setCurrentFavorite}  photos = {props.photos} toggleModalState = {props.toggleModalState}  />
    </div>
  );
}

export default HomeRoute;
