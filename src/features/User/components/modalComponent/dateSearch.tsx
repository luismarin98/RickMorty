import { FC, useContext, ChangeEvent } from "react";
import UsuariosContext, {
  IUsuariosContext,
} from "../../providers/userProvider";
import moment from "moment";

export const DateModalChild: FC = () => {
  const { setDateNow, runFilter } = useContext(
    UsuariosContext
  ) as IUsuariosContext;

  const today = new Date();
  const date = today.setDate(today.getDate());
  const defaultValue = new Date(date).toISOString().split("T")[0];

  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const getDate = moment(event.target.value).format("DD/MM/YYYY");
    setDateNow(getDate);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center sm:flex-col px-7">
      <label className="flex flex-row gap-1 items-center">
        <input
          className="text-center p-2 rounded-md"
          id="dateRequired"
          type="date"
          name="dateRequired"
          defaultValue={defaultValue}
          onChange={handleDate}
        />
      </label>
      <button onClick={runFilter} className="flex items-center justify-center p-2 focus:shadow-inner rounded-lg">
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
};
