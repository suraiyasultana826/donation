import { NavLink } from 'react-router-dom';
import Logo from '../Logo';

const Navbar = () => {
    return (
        <div className=''>
            <nav className='flex justify-between items-center py-6 shadow-md px-5'>
                {/* <img src="../../../assets/Logo.png" alt="" /> */}
                <Logo></Logo>
                <ul className='md:flex md:gap-5 lg:flex lg:gap-5'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;