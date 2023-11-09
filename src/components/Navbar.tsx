import { Link } from 'react-router-dom';

const routes = [
    {
        path: '/name-character',
        name: 'Nombres',
    },
    {
        path: '/id-character',
        name: 'ID',
    },
    {
        path: '/all-character',
        name: 'Todos los Personajes',
    },
    {
        path: '/users',
        name: 'Usuarios',
    },
];

export default function Navbar() {
    return <nav className='flex gap-1 items-center justify-around bg-slate-200 dark:bg-slate-600 dark:text-white'>
        <Link to='/'>Rick Morty</Link>
        <ul className='flex gap-1 p-2'>
            {routes.map((data) => <li key={data.name} ><Link className='hover:bg-slate-300 p-1 rounded-sm px-4 hover:dark:bg-zinc-700' to={data.path}>{data.name}</Link></li>)}
        </ul>
    </nav>
}