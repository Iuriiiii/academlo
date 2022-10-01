import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsHandbagFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useComplex } from 'react-simplify';
import { ICart, IResponse, TProducts } from '../models';
import Content from './Content';

interface Props { }

const Cart = (props: Props) => {
    const [cart, setCart] = useComplex<ICart>({ id: 0, products: [] });
    const navigator = useNavigate();

    useEffect(() => {
        axios.get<IResponse>('https://ecommerce-api-react.herokuapp.com/api/v1/cart')
            .then(res => setCart(res.data.data.cart!))
            .catch(console.error);
    }, []);

    function onBuy(e: React.MouseEvent<HTMLButtonElement>) {
        axios.post<IResponse>('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', {
            street: 'Green St. 1456',
            colony: 'Southwest',
            zipCode: 12345,
            city: 'USA',
            references: 'Some references'
        })
            .then(res => navigator('/purchases'))
            .catch(console.error)
    }

    console.log(cart.id, cart.products.length);

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-6'>
                {(cart.id === 0 || cart.products.length === 0) && <h2 className='text-2xl animate-bounce font-bold text-red-500'>0 Products</h2>}
                {
                    cart.id !== 0 && cart.products.length !== 0 && cart.products.map(product =>
                        <div className='w-52 h-60 overflow-scroll' key={product.id}>
                            <h3 className='font-bold text-center text-2xl text-red-500 h-28 self-center'>{product.title}</h3>
                            <span className='font-bold text-center block'>${product.productsInCart.quantity * parseFloat(product.price)} ({product.productsInCart.quantity}u)</span>
                            <p>{product.description}</p>
                        </div>
                    )
                }
            </div>
            {
                cart.id !== 0 && cart.products.length !== 0 &&
                <div className='text-center'>
                    <button onClick={onBuy} type='button' className='text-3xl text-green-500 mt-3 active:text-red-500'>
                        <BsHandbagFill />
                    </button>
                </div>
            }
        </div>
    )
}

export default Cart