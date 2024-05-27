import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
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
    setInputValue("");
  };

  const handleChangeCheck = (id: number, progress: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.progress = !progress;
      }
      return todo;
    });
    setTodos([...newTodos]);
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

  const onClickDelete = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos([...newTodos]);
  };

  return (
    <>
      <div>
        <h2>Todo List in TypeScript</h2>
        <form onSubmit={(e) => onChangeSubmit(e)}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onChangeTodo(e)}
          />
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
                  disabled={todo.progress}
                />
                <input
                  type="checkbox"
                  onChange={() => handleChangeCheck(todo.id, todo.progress)}
                />
                <input
                  type="button"
                  value="Delete"
                  onClick={() => onClickDelete(todo.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
