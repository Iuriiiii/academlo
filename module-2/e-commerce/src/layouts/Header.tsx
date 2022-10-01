import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobal } from 'react-simplify';

interface Props { }

const Header = (props: Props) => {
    const [session, setSession] = useGlobal<string | null>('session');
    // const session = localStorage.getItem('session');

    return (
        <div className='h-20 flex items-center justify-between flex-col sm:flex-row px-5 my-8'>
            <NavLink to='/'><h1 className="text-2xl md:text-3xl font-bold text-red-500">E-Commerce</h1></NavLink>
            <nav className=''>
                <ol className='divide-x-8 divide-white'>
                    <li className='inline hover:underline'><NavLink to='/'>Home</NavLink></li>
                    {session === null && <li className='inline hover:underline'><NavLink to='/signin'>Sing In</NavLink></li>}
                    {session !== null && <li className='inline hover:underline'><NavLink to='/cart'>Cart</NavLink></li>}
                    {session !== null && <li className='inline hover:underline'><NavLink to='/purchases'>Purchases</NavLink></li>}
                    {session !== null && <li className='inline hover:underline'><NavLink to='/logout'>Logout</NavLink></li>}
                    {/* <li className='inline hover:underline'><NavLink to='/signup'>Sign Up</NavLink></li> */}
                </ol>
            </nav>
        </div >
    )
}

export default Header