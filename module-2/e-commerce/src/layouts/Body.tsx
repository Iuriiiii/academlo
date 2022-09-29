import React from 'react'
import Home from '../components/Home'

interface Props { }

const Body = (props: Props) => {
    return (
        <div className='p-5 flex justify-center flex-wrap gap-3'>
            <Home />
        </div>
    )
}

export default Body