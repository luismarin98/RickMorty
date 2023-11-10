import { Link } from 'react-router-dom';
import logoIntuito from '../assets/logoIntuito.png';

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
    return <nav className='bg-cyan-300 dark:bg-slate-600 dark:text-white tablet:flex tablet:items-center tablet:justify-around tablet:flex-col tablet:gap-1 laptop:flex laptop:flex-row desktop:flex-row desktop:justify-around sm:flex sm:justify-center sm:items-center sm:flex-col sm:gap-2'>
        <Link to='/' className='flex flex-row gap-2'>
            <img src={logoIntuito} alt='logoIntuito' width={25} />
            <p>Test Intuito</p>
        </Link>
        <ul className='flex gap-1 p-2'>
            {routes.map((data) => <li key={data.name} ><Link className='hover:bg-cyan-400 p-1 rounded-sm' to={data.path}>{data.name}</Link></li>)}
        </ul>
    </nav>
}