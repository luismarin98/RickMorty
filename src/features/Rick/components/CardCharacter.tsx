import { FC, useContext } from "react";
import SearchContext, { ISearchContext } from "../providers/searchProviders";

const OneCharacter: FC = () => {
  const { info } = useContext(SearchContext) as ISearchContext;

  if (!info) return null;

  return (
    <div className="flex p-2 flex-row items-center gap-2 shadow-lg shadow-stone-500 rounded-lg dark:bg-slate-800 dark:text-white">
      <img src={info?.image} alt={info?.name} width={100} className="rounded-lg" />
      <div>
        <p>
          <strong>Nombre:</strong> {info?.name}
        </p>
        <p>
          <strong>Genero:</strong>{" "}
          {info?.gender === null ? null : info?.gender === "Male" ? "Hombre" : info?.gender === "Female" ? "Mujer" : "Otro"}
        </p>
        <p>
          <strong>Especie:</strong> {info?.species}
        </p>
      </div>
    </div>
  );
};

export default OneCharacter;
