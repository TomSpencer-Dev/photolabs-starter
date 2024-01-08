import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

//TopNavigation is the navbar includ TopicList and FavBadge
const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} setTopic={props.setTopic} />
      <FavBadge isFavPhotoExist={props.favorites} />
    </div>
  );
};
export default TopNavigation; 