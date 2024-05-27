import { FC } from "react";
import { Todo } from "../types/todo";

type TodoListProps = {
  todo: Todo;
  handleChangeEdit: (id: number, inputValue: string) => void;
  handleChangeCheck: (id: number, progress: boolean) => void;
  onClickDelete: (id: number) => void;
};
export const TodoItem: FC<TodoListProps> = ({
  todo,
  handleChangeCheck,
  handleChangeEdit,
  onClickDelete,
}) => {
  return (
    <li className="flex justify-center items-center" key={`${todo.id}`}>
      <input
        className="input-base"
        value={todo.inputValue}
        onChange={(e) => handleChangeEdit(todo.id, e.target.value)}
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
};
