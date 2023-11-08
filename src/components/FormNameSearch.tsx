import { FC, useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CharacterResponse } from "../request/characterResponse";
import SearchContext, { ISearchContext } from "../providers/searchProviders";

const FormNameSearch: FC = () => {
    const { getValues } = useFormContext<CharacterResponse>();
    const { getName } = useContext(SearchContext) as ISearchContext;
    const { register } = useFormContext();

    const handleSearchName = async () => {
        const value = { ...getValues() };
        if (!value.name) return null;
        await getName(value.name);
    }

    return (
        <div className="container flex flex-row shadow-sm shadow-slate-600 gap-1 p-2 rounded-md">
            <input className="border-solid bg-slate-100 text-center" type="text" {...register("name")} />
            <button className="p-1 hover:bg-slate-400 rounded-sm w-32" onClick={handleSearchName}>Buscar</button>
        </div>
    );
}

export default FormNameSearch;