import { FC } from "react";
import FormSearchCharacter from "../../features/Rick/components/FormSearch";
import { SearchProvider } from "../../features/Rick/providers/searchProviders";
import { CharacterID } from "../../features/Rick/request/characterResponse";
import { FormProvider, useForm } from "react-hook-form";
import OneCharacter from "../../features/Rick/components/CardCharacter";

const IDCharacter: FC = () => {
  const initialStateForm: CharacterID = { ID: "" };

  const method = useForm<CharacterID>({
    defaultValues: initialStateForm,
  });

  return (
    <div className="flex flex-col gap-1 items-center justify-center">
      <h2>Busqueda por IDS</h2>
      <SearchProvider>
        <FormProvider {...method}>
          <div className="flex flex-col gap-1">
            <FormSearchCharacter />
            <OneCharacter />
          </div>
        </FormProvider>
      </SearchProvider>
    </div>
  );
};

export default IDCharacter;
