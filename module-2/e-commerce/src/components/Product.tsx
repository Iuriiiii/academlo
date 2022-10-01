import React from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs';
import { GrCircleInformation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { useGlobal } from 'react-simplify';
import { IProduct } from '../models';

interface Props { }

function Product(props: IProduct) {
    // const [session, setSession] = useGlobal<string | null>('session');
    const session = localStorage.getItem('session');

    return (
        <div className='relative w-56 h-62 p-5 shadow-sm shadow-slate-900 hover:bg-slate-200'>
            <div className="h-15">
                <h2 className='text-red-500 font-bold text-lg mb-5'>{props.title}</h2>
            </div>
            <span className='absolute right-3 rotate-45 text-bold'>${props.price}</span>
            <div className='w-9/12 m-auto h-full my-3'>
                <img className='w-full h-48 object-contain' src={props.productImgs[0]} alt='product-image' />
            </div>
            <div className='absolute bottom-2 right-3 divide-x-8'>
                <Link to={`/product/${props.id}`}><button className='text-2xl text-red-500 hover:text-blue-500'><GrCircleInformation /></button></Link>
                {/* {session !== null && <button className='text-2xl text-red-500 hover:text-blue-500'><BsFillCartPlusFill /></button>} */}
            </div>
        </div>
    );
}
export default Product