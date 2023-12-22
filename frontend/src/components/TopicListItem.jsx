import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({data, setTopic}) => {
const { id, slug, title} = data

  return (
    <li className="topic-list__item" onClick = {() => setTopic(id)}>
      {title}
    </li>
  );
};

export default TopicListItem;
