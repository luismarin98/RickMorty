import { FC, useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { CharacterResponse } from "../request/characterResponse";
import SearchContext, { ISearchContext } from "../providers/searchProviders";
import BtnHook from "./RandomBTN";

const FormSearchCharacter: FC = () => {
  const { getValues } = useFormContext<CharacterResponse>();
  const { getID } = useContext(SearchContext) as ISearchContext;
  const { register } = useFormContext();

  const handleSearchID = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const value = { ...getValues() };
    if (!value.id) return null;
    getID(value.id);
  };

  return (
    <div className="container flex flex-row shadow-sm shadow-slate-600 gap-1 p-2 rounded-md bg-stone-100 dark:bg-slate-800  justify-center">
      <input className="border-solid text-center border-spacing-1 rounded-sm" type="text" {...register("id")} />
      <button className="p-1 hover:bg-slate-400 rounded-sm w-32 dark:bg-slate-200" onClick={handleSearchID}>Buscar</button>
      <BtnHook />
    </div>
  );
};

export default FormSearchCharacter;
