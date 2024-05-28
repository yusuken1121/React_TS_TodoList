import { FC } from "react";

type HeaderProps = {
  currentImage: string;
  onToggleDarkMode: () => void;
};

export const Header: FC<HeaderProps> = ({ onToggleDarkMode, currentImage }) => {
  return (
    <div className="flex justify-center py-11 ">
      <h2 className="text-3xl font-bold">Todo List in TypeScript</h2>
      <div className="w-8 h-8 flex mx-5 border-solid border-2 border-r-8 dark:border-l-8 dark:border-r-2 hover:cursor-pointer hover:scale-110  hover:bg-lime-300 dark:hover:bg-purple-400 transition ease-in-out duration-300">
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
