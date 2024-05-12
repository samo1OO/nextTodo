import React from "react";
import { TodoContainer } from "@/components/TodoContainer";

const Home = () => {
  return (
    <div>
      <TodoContainer />
    </div>
  );
};

// 仮に書いたもの ↓ --------------------------
// データ定義
/*
type TodoType = {
  id: number;
  content: string;
  isDone: boolean;
};

const Home = () => {
  // useState<型名> で state 作成 
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, content: "foo", isDone: false },
    { id: 2, content: "bar", isDone: true },
    { id: 3, content: "baz", isDone: false },
  ]);

  // 入力欄のstate
  // setInputText に setter が返る (onChange)
  const [inputText, setInputText] = useState("");

  // state更新↓
  // input 入力時(e 変更時)、stateをそのeの値に更新
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClickAdd = () => {
  // 入力欄が空の状態では todo を追加できなくする
    if (inputText.trim() === "" ){ //blank判定
      return;
    }

    const uuid = self.crypto.randomUUID();
    setTodos((prevTodos) => [ // prevTodos-更新前state
      ...prevTodos,
      { id: uuid, content: inputText, isDone: false },
    ]);
    setInputText("");
  };

  // 完了状態更新の関数
  const handleChangeIsDone = (id: TodoType["id"]) => {
    const newTodos = todos.map((todo) => { 
      // 更新対象の id と一致する todo だけ、isDone を反転させた状態の配列を返す
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(newTodos);
  };

  // 削除ボタン
  const handleClickDelete = (id: TodoType["id"]) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };


  //-----------
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleChangeInput}/>
        <button
          onClick={handleClickAdd}>
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.content}</span>
            <input
              type="checkbox"
              checked={todo.isDone} //isDone が true のとき
              onChange={() => handleChangeIsDone(todo.id)}
            />
            <button onClick={() => handleClickDelete(todo.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>

    
  );
};
*/

export default Home;