import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ICart, IResponse, IPurchase } from '../models';

interface Props { }

const Purchases = (props: Props) => {
    const [purchases, setPurchases] = useState<IPurchase[] | null>(null);

    useEffect(() => {
        axios.get<IResponse>('https://ecommerce-api-react.herokuapp.com/api/v1/purchases')
            .then(res => setPurchases(res.data.data.purchases!))
            .catch(console.error);
    }, []);

    if (purchases === null) {
        return <h2 className='text-2xl animate-bounce font-bold text-red-500'>Loading</h2>;
    }

    function drawPurchase(purchase: IPurchase) {
        const date = new Date(purchase.createdAt);

        return <div className='w-full' key={purchase.id}>
            <span className='font-bold w-full'>{date.toLocaleString()}:</span>
            <ol className='list-disc'>
                {purchase.cart.products.map(product => <li>{product.title} x {product.productsInCart.quantity} - ${product.productsInCart.quantity * parseFloat(product.price)}</li>)}
            </ol>
        </div>;
    }

    return (
        <div className='divide-y-8 divide-white'>
            {
                purchases.map(purchase => drawPurchase(purchase))
            }
        </div>
    )
}

export default Purchases