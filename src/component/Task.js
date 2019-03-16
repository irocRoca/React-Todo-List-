import React from "react";

const Task = ({ todo, remove }) => {
  const item = todo.map(post =>
    post.task === "" ? null : (
      <li className="list-item animated fadeInDown" key={post.id}>
        <div className="contain-element">
          <p className="task-text">{post.task}</p>
          <i
            className="fas fa-times btn-close"
            onClick={() => {
              remove(post.id);
            }}
          />
        </div>
      </li>
    )
  );

  return (
    <div>
      {!todo.length ? (
        <h3 className="title">You have no task to complete</h3>
      ) : (
        <ul className="list">{item}</ul>
      )}
    </div>
  );
};

export default Task;
