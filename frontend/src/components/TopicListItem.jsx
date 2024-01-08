import React from "react";
import "../styles/TopicListItem.scss";

//TopicListItem displays an individual topic from TopicList in JSX
const TopicListItem = ({ data, setTopic }) => {
  const { id, title } = data;

  return (
    <li className="topic-list__item" onClick={() => setTopic(id)}>
      {title}
    </li>
  );
};

export default TopicListItem;
