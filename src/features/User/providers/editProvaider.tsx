import {
  ReactNode,
  createContext,
  useState,
 
} from "react";

export interface IEditContext {
  idUser: string;
  setIdUser: (id: string) => void;
}

const EditContext = createContext({});

export const EditProvider = ({ children }: { children: ReactNode }) => {
  const [idUser, setIdUser] = useState();

  const storage: IEditContext = {
    idUser,
    setIdUser,
  };

  return (
    <EditContext.Provider value={storage}>{children}</EditContext.Provider>
  );
};

export default EditContext;
