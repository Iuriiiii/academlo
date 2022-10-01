import React from 'react'

interface Props { }

const Footer = (props: Props) => {
    return (
        <div className='flex justify-center items-center'>
            <span className='font-bold'>&copy; <a href='https://www.linkedin.com/in/alexnqn/' target='_blank'>Alexander Casas</a></span>
        </div>
    )
}

export default Footer