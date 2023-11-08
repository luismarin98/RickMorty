import { FC, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CharacterResponse } from "../request/characterResponse";
import SearchContext, { ISearchContext } from "../providers/searchProviders";
import BtnHook from "./button";

const FormSearchCharacter: FC = () => {
  const { getValues } = useFormContext<CharacterResponse>();
  const { getID } = useContext(SearchContext) as ISearchContext;
  const { register } = useFormContext();

  const handleSearchID = () => {
    const value = { ...getValues() };
    if (!value.id) return null;
    getID(value.id);
  };

  return (
    <div className="container flex flex-row shadow-sm shadow-slate-600 gap-1 p-2 rounded-md">
      <input className="border-solid bg-slate-100 text-center" type="text" {...register("id")} />
      <button className="p-1 hover:bg-slate-400 rounded-sm w-32" onClick={handleSearchID}>Buscar</button>
      <BtnHook />
    </div>
  );
};

export default FormSearchCharacter;
