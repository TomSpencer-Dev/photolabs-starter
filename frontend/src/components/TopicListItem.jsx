import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({data}) => {
const { id, slug, title} = data

  return (
    <li className="topic-list__item">
      {title}
    </li>
  );
};

export default TopicListItem;
