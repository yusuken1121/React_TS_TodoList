import { FC } from "react";

type HeaderProps = {
  currentImage: string;
  onToggleDarkMode: () => void;
};

export const Header: FC<HeaderProps> = ({ onToggleDarkMode, currentImage }) => {
  return (
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
  );
};
