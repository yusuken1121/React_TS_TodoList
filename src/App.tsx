import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isDarkmode, setIsDarkMode] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>(
    "../src/assets/darkmode.png"
  );

  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkmode);
  };
  useEffect(() => {
    if (isDarkmode) {
      document.documentElement.classList.add("dark");
      setCurrentImage("../src/assets/whitemode.png");
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentImage("../src/assets/darkmode.png");
    }
  }, [isDarkmode]);

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
      <div className="text-center m-11">
        <div className="flex-col justify-center">
          <div className="flex justify-center py-11 ">
            <h2 className="text-3xl font-bold">Todo List in TypeScript</h2>
            <div className="w-8 h-8 flex">
              <img
                onClick={() => {
                  onToggleDarkMode();
                }}
                src={currentImage}
                alt=""
              />
            </div>
          </div>

          <form className="flex-col" onSubmit={(e) => onChangeSubmit(e)}>
            <input
              className="input-base"
              placeholder="Enter what you want to do here"
              type="text"
              value={inputValue}
              onChange={(e) => onChangeTodo(e)}
            />
            <input className="button-base" type="submit" value="Add the Todo" />
          </form>
        </div>
        <div>
          <ul>
            {todos.map((todo) => {
              return (
                <li
                  className="flex justify-center items-center"
                  key={`${todo.id}`}
                >
                  <input
                    className="input-base"
                    value={todo.inputValue}
                    onChange={(e) => onChangeEdit(todo.id, e.target.value)}
                    disabled={todo.progress}
                  />
                  <input
                    className="box-border m-4 size-5"
                    type="checkbox"
                    onChange={() => handleChangeCheck(todo.id, todo.progress)}
                  />
                  <input
                    className="button-base"
                    type="button"
                    value="Delete"
                    onClick={() => onClickDelete(todo.id)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
