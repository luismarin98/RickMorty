import { createContext, ReactNode } from "react";
import useGetSearch from "../hooks/useSearch";
import { CharacterResponse } from "../request/characterResponse";

export interface ISearchContext {
  info: CharacterResponse | undefined;
  getID: (id: string) => void;
}

const SearchContext = createContext({});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const { info, getCharacter } = useGetSearch();

  const storage: ISearchContext = {
    info: info,
    getID: getCharacter,
  };

  return (
    <SearchContext.Provider value={storage}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
