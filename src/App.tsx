import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./types/todo";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

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
    if (inputValue.length > 0) {
      const newTodo: Todo = {
        id: todos.length,
        inputValue: inputValue,
        progress: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    } else {
      alert("Enter more than 1 letter");
    }
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
  const handleChangeEdit = (id: number, inputValue: string) => {
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
          <Header
            onToggleDarkMode={onToggleDarkMode}
            currentImage={currentImage}
          />
          <TodoForm
            onChangeSubmit={onChangeSubmit}
            inputValue={inputValue}
            onChangeTodo={onChangeTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            handleChangeCheck={handleChangeCheck}
            handleChangeEdit={handleChangeEdit}
            onClickDelete={onClickDelete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
