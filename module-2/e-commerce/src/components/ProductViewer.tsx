import axios from 'axios';
import { Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import { IProduct, IResponse, TProducts } from '../models'

interface Props { }

const ProductViewer = (props: Props) => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const { id } = useParams();
    const [price, setPrice] = useState<number>(1);
    const navigator = useNavigate()
    const session = localStorage.getItem('session');

    useEffect(() => {
        axios.get<IResponse>(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
            .then(res => setProduct(res.data.data.product!))
            .catch(console.error);
    }, []);

    if (product === null) {
        return <h2 className='text-2xl animate-bounce font-bold text-red-500'>Loading</h2>;
    }

    function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
        axios.post<IResponse>('https://ecommerce-api-react.herokuapp.com/api/v1/cart', {
            id: product!.id,
            quantity: price
        })
            .then(res => navigator('/cart'))
            .catch(console.error);
    }

    return (
        <div className='container flex justify-center flex-col flex-wrap divide-y-8 divide-white'>
            <h2 className='font-bold text-red-500 text-2xl'>{product.title}</h2>

            <div className='flex flex-col md:flex-row'>
                <div className='md:flex-1 md:w-6/12 h-56 md:h-64 xl:h-80 2xl:h-96 text-black'>
                    <Carousel>
                        {product.productImgs.map(img => <div key={img} className='flex justify-center h-52'><img className='w-6/12 md:w-3/12 md:h-52 object-contain' alt='image-product' src={img} /></div>)}
                    </Carousel>
                </div>
                <div className='md:flex-1'>
                    <h3 className='text-2xl'>Details:</h3>
                    <p className=''>{product.description}</p>
                </div>
            </div>
            {
                session !== null &&
                <div className='flex items-center md:justify-end justify-between divide-x-8 divide-white'>
                    <label>Count: <input onChange={(e) => setPrice(parseInt(e.target.value))} className='h-8 w-16' defaultValue={1} type='number' min={1} max={20} step={1} /> <span>${price * parseInt(product.price) || product.price}</span></label>
                    <button type='button' className='text-3xl text-red-500' onClick={addToCart}><BsFillCartPlusFill /></button>
                </div>
            }

        </div>
    )
}

export default ProductViewer