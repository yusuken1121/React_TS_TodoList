import { FC } from "react";
import { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  handleChangeEdit: (id: number, inputValue: string) => void;
  handleChangeCheck: (id: number, progress: boolean) => void;
  onClickDelete: (id: number) => void;
};

export const TodoList: FC<TodoListProps> = ({
  todos,
  handleChangeEdit,
  handleChangeCheck,
  onClickDelete,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeCheck={handleChangeCheck}
            handleChangeEdit={handleChangeEdit}
            onClickDelete={onClickDelete}
          />
        );
      })}
    </ul>
  );
};
