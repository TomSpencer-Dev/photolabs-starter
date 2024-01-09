import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import SearchBar from "../components/SearchBar";

//HomeRoute is the main page to accept components to build the page
function HomeRoute(props) {
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} favorites={props.favorites} setTopic={props.setTopic} />
      <SearchBar filterPhotos = {props.filterPhotos}/>
      <PhotoList setFavorites={props.setFavorites} photos={props.photos} toggleModalState={props.toggleModalState} favorites ={props.favorites} />
    </div>
  );
}

export default HomeRoute;
