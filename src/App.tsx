import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [progress, setProgress] = useState<boolean>(false);
  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onChangeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: todos.length,
      inputValue: inputValue,
      progress: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleChangeCheck = () => {
    setProgress(!progress);
  };
  const onChangeEdit = (id: number, inputValue: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos([...newTodo]);
  };

  return (
    <>
      <div>
        <h2>Todo List in TypeScript</h2>
        <form onSubmit={(e) => onChangeSubmit(e)}>
          <input type="text" onChange={(e) => onChangeTodo(e)} />
          <input type="submit" value="Add the Todo" />
        </form>
      </div>
      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <li key={`${todo.id}`}>
                <input
                  value={todo.inputValue}
                  onChange={(e) => onChangeEdit(todo.id, e.target.value)}
                />
                <input type="checkbox" onChange={handleChangeCheck} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;