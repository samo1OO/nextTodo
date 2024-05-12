import React from "react";
import { TodoType } from "./TodoContainer";

// Props 型定義
type Props = {
  todo: TodoType;
  handleChangeIsDone: (id: TodoType["id"]) => void;
  handleClickDelete: (id: TodoType["id"]) => void;
};

// FC登録
export const TodoItem: React.FC<Props> = ({
  todo,
  handleChangeIsDone,
  handleClickDelete,
}) => {
  return (
    <div id="todo">
      <span>{todo.content}</span>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => handleChangeIsDone(todo.id)}
      />
      <button onClick={() => handleClickDelete(todo.id)}>✕</button>
    </div>
  );
};
