import { Link } from 'react-router-dom';
import React from "react";

import {
    Navbar,
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";

const rutas = [
    {
        name: 'Usuarios',
        path: '/usuarios',
    },
    {
        name: 'RickMorty',
        path: '/rick',
    }
]


function NavList() {
    return <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {
            rutas.map((data) => <Typography
                key={data.name}
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium"
            >
                <Link className="flex items-center hover:text-blue-500 transition-colors" to={data.path}>{data.name}</Link>
            </Typography>)
        }
    </ul>
}

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState<boolean>(false);

    const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-6 py-3 bg-neutral-50 dark:bg-neutral-800">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link to='/'>
                    <Typography as="a" variant="h6" className="mr-4 cursor-pointer py-1.5">Test Intuito</Typography>
                </Link>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    ) : (
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </Navbar>
    )
}

export default NavBar;
