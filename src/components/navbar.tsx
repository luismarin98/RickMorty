import { Link } from 'react-router-dom';

const routes = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Personajes',
        path: '/all-characters',
    },
    {
        name: 'ID',
        path: '/id-characters',
    }
]

export default function Navbar() {
    return <nav className="flex justify-around p-1 bg-slate-200">
        <Link className='hover:bg-slate-400 rounded-lg p-1' to='/'>Test Rick</Link>
        <ul className="flex flex-row gap-1">
            {
                routes.map((data) => <li className='hover:bg-slate-400 rounded-lg p-1' key={data.name}><Link  to={data.path}>{data.name}</Link></li>)
            }
        </ul>
    </nav>
}