import { useState } from "react";
import { UserRequest } from "../domain/userRequest";
import axios from "axios";

const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<UserRequest[]>([]);//Declaro la lista que tendra todos los usuarios de la DB
    const [user, setUser] = useState<UserRequest>();//Declaro una variable que tendra los datos del usuario

    const getUsuarios = async () => {
        const response = await axios.get('http://localhost:3000/users"');//Recojo los usuarios de la DB y los asigno a la variable Array
        if (!response.data) return null;
        setUsuarios(response.data);
    }

    const postUsers = async (userData: UserRequest) => {
        await axios.post('http://localhost:3000/users', { ...userData });//Guardo usuario
    }

    const deletUser = async (userID: string) => {
        await axios.delete('http://localhost:3000/users', { data: userID });//elimino usuario
    }

    const searchUser = async (id_user: string) => {
        const response = await axios.get(`http://localhost:3000/users/${id_user}`);//Busco usuario por id
        const data = response.data;
        if (!data) return null;
        setUser(data);//guardo el dato en la variable
        console.log(data)
    }

    return { usuarios, user, getUsuarios, postUsers, deletUser, searchUser }
}

export default useUsuarios;