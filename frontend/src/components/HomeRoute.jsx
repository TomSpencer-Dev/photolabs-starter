import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigationBar from "./TopNavigationBar";
import PhotoList from "./PhotoList";

function HomeRoute(props) {
  return (
    <div className="home-route">
      <TopNavigationBar topics = {props.topics} />
      <PhotoList photos = {props.photos} />
    </div>
  );
}

export default HomeRoute;