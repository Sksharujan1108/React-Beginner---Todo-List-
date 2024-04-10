import React from "react";
import "./itemlist.css";

const ListItem = (props) => {
  const { id, task, onClickDelete } = props;
  return (
    <div className="list-item">
      <div className="list-item-content">
        <div className="list-item-title">
          <li className="listStyle">{task}</li>
        </div>
        <div className="list-item-delete">
          <button className="delete-button" onClick={() => onClickDelete(id)}>
            {" "}
            Delete{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
