import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from 'components/TopicListItem';


const TopicList = ({topics}) => {
const topicListItems = topics.map((topic) =>
 { 
  return <TopicListItem key={topic.id} data={topic} />;
});
  return (
    <ul className="top-nav-bar__topic-list">
      {topicListItems}
    </ul>
  );
};

export default TopicList;
