import React, { useState } from "react";
import { TodoType } from "./TodoContainer";

type Props = {
  addTodo: (inputText: TodoType["content"]) => void;
};

// 引数にうけとった文字列をtodosに追加する処理自体をpropsで受け取り

export const TodoAddForm: React.FC<Props> = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClickAdd = () => {
    if (inputText.trim() === "") {
      return;
    }
    addTodo(inputText);
    setInputText("");
  };
  return (
    <div id="form">
      <input type="text" value={inputText} onChange={handleChangeInput} />
      <button onClick={handleClickAdd}>Add</button>
    </div>
  );
};
