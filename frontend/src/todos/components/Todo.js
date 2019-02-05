import React from "react";
import { Link } from "react-router-dom";
import TodoClient from "../../common/clients/TodoClient";

const STATUS_TYPES = {
  DONE: "done",
  IN_PROGRESS: "in_progress",
  OPEN: "open"
};

const Todo = ({ todo, onRemove, onStatusChange }) => {
  return (
    <div>
      <Link to={`todo/${todo.id}`}>{todo.name}</Link>
      {todo.description && ` - ${todo.description}`}
      <button onClick={() => TodoClient.remove(todo.id).then(onRemove)}>
        Remove
      </button>
      {JSON.stringify(onStatusChange)}
      {todo.status && (
        <div>
          {todo.status === STATUS_TYPES.OPEN && (
            <button
              onClick={() =>
                TodoClient.changeStatus(todo.id, STATUS_TYPES.IN_PROGRESS).then(
                  onStatusChange
                )
              }
            >
              Mark as In progress
            </button>
          )}

          {todo.status === STATUS_TYPES.IN_PROGRESS && (
            <button
              onClick={() =>
                TodoClient.changeStatus(todo.id, STATUS_TYPES.DONE).then(
                  onStatusChange
                )
              }
            >
              Mark as Done
            </button>
          )}

          {todo.status === STATUS_TYPES.DONE && (
            <button
              onClick={() =>
                TodoClient.changeStatus(todo.id, STATUS_TYPES.OPEN).then(
                  onStatusChange
                )
              }
            >
              Reopen
            </button>
          )}
        </div>
      )}
    </div>
  );
};

Todo.defaultProps = {
  onRemove: () => {},
  onStatusChange: () => {}
};

export default Todo;
