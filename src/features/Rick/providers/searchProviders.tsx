import { createContext, ReactNode } from "react";
import useGetSearch from "../hooks/useSearch";
import { CharacterResponse } from "../request/characterResponse";

export interface ISearchContext {
  info: CharacterResponse | undefined;
  infoList: CharacterResponse[] | undefined;
  getID: (id: string) => void;
  getName: (name: string) => void;
}

const SearchContext = createContext({});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const { info, getCharacter, getNameCharacter, infoListSearch } = useGetSearch();

  const storage: ISearchContext = {
    info: info,
    infoList: infoListSearch,
    getID: getCharacter,
    getName: getNameCharacter,
  };

  return (
    <SearchContext.Provider value={storage}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
