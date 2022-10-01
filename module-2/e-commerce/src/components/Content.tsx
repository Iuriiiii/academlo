import React from 'react'
import { TProducts } from '../models';
import Product from './Product';

interface Props { products: TProducts }

const Content = (props: Props) => {
    const products = props.products;
    
    if (products.length === 0) {
        return (
            <h2 className='text-2xl animate-bounce font-bold text-red-500'>Loading</h2>
        );
    }

    return <>
        {
            products.map(product => <Product key={product.id} {...product} />)
        }
    </>;
}

export default Content