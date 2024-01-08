import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from 'components/TopicListItem';

//TopicList is an array of topics that returns each topic list item
const TopicList = ({ topics, setTopic }) => {
  const topicListItems = topics.map((topic) => {
    return <TopicListItem key={topic.id} data={topic} setTopic={setTopic} />;
  });
  return (
    <ul className="top-nav-bar__topic-list">
      {topicListItems}
    </ul>
  );
};

export default TopicList;
