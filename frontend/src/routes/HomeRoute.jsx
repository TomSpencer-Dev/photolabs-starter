import React, { useState } from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

function HomeRoute(props) {
  return (
    <div className="home-route">
      <TopNavigationBar topics = {props.topics} favorites = {props.favorites} setTopic = {props.setTopic} />
      <PhotoList setFavorites = {props.setFavorites}  photos = {props.photos} toggleModalState = {props.toggleModalState}  />
    </div>
  );
}

export default HomeRoute;
