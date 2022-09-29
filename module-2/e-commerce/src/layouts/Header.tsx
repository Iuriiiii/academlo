import React from 'react'
import { NavLink, Route, Router } from 'react-router-dom'

interface Props { }

const Header = (props: Props) => {
    return (
        <div className='h-20 flex items-center px-5 my-8'>
            {/* <NavLink to='/'><h1 className="text-3xl font-bold text-red-500">E-Commerce</h1></NavLink> */}
            <nav>
                <ol>
                    <li>Home</li>
                </ol>
            </nav>
        </div >
    )
}

export default Header