import { ChangeEvent, FC, FormEvent } from "react";

type FormProps = {
  onChangeSubmit: (e: FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  onChangeTodo: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TodoForm: FC<FormProps> = ({
  onChangeSubmit,
  inputValue,
  onChangeTodo,
}) => {
  return (
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
  );
};
