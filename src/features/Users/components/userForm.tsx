import { FC, useContext, ChangeEvent, MouseEvent } from "react";
import ModalComponent from "./modalComponet";
import UsuarioContext, { IUsuarioContext } from "../providers/userProvaider";
import UserFormContent from "./modalActions/newUser";
import moment from "moment";
import { useFormContext } from "react-hook-form";
import { UserRequest } from "../domain/userRequest";
import { EditUserContent } from "./modalActions/editUser";

export const UserForm: FC = () => {

    const { openModal, setOpenModal, setDateParam, runFilter, statusParam, setStatusParam, editModal, setEditModal } = useContext(UsuarioContext) as IUsuarioContext;
    const { reset } = useFormContext<UserRequest>();

    const toggleModal = () => {
        setOpenModal(!openModal);
        reset();
        if (editModal) return setEditModal(false);
    }

    const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
        const getDate = moment(event.target.value).format('DD/MM/YYYY');
        setDateParam(getDate);
    }

    const handleSearch = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        runFilter();
    }

    const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const status = event.target.value;
        switch (status) {
            case 'activo':
                setStatusParam(true);
                break;

            case 'inactivo':
                setStatusParam(false);
                break;

            default:
                setStatusParam(null);
                break;
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="bg-white dark:bg-slate-800 rounded-lg px-5 py-3 ring-1 ring-slate-900/5 shadow-xl flex flex-row gap-2 items-center justify-center flex-wrap">
                <button
                    onClick={toggleModal}
                    className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300"
                >
                    Nuevo Usuario
                </button>
                <label className="flex flex-row gap-1 items-center">
                    <input
                        className="text-center p-2 rounded-md"
                        id="dateRequired"
                        type="date"
                        name="dateRequired"
                        defaultValue=""
                        onChange={handleDate}
                        required
                    />
                </label>
                <label className="flex flex-row items-center gap-1">
                    <p className="dark:text-white">Estado</p>
                    <select
                        className="rounded-md p-2 hover:bg-gray-50 text-center"
                        id="status"
                        value={statusParam === true ? "activo" : statusParam === false ? "inactivo" : statusParam === null ? 'todos' : ''}
                        onChange={handleStatusChange}
                    >
                        <option value="todos">Todos</option>
                        <option value="activo">Activos</option>
                        <option value="inactivo">Inactivos</option>
                    </select>
                </label>
                <button onClick={handleSearch} className="border rounded-lg p-2 bg-blue-300 hover:bg-blue-400 dark:bg-slate-200 dark:hover:bg-slate-300 flex items-center text-black">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </button>
            </div>
            <ModalComponent isOpen={openModal} onClose={toggleModal} title={"Usuario"}>
                {editModal ? <EditUserContent /> : <UserFormContent />}
            </ModalComponent>
        </div>
    )
}