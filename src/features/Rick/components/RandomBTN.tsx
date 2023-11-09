import { MouseEvent, FC } from "react";
import { useFormContext } from "react-hook-form";
import { CharacterResponse } from "../request/characterResponse";

const BtnHook: FC = () => {
  const { setValue } = useFormContext<CharacterResponse>();

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const handleEventBtn = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setValue("id", getRandomInt(826).toString());
    console.log("Hola mundo");
  };

  return (
    <button
      className="p-1 hover:bg-slate-400 rounded-sm w-32 dark:bg-slate-200"
      onClick={handleEventBtn}
    >
      Random ID
    </button>
  );
};

export default BtnHook;
