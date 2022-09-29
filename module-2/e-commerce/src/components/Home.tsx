import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IProduct, IResponse, TProducts } from '../models';

interface Props { }

const Home = (props: Props) => {
    const [products, setProducts] = useState<TProducts>([]);

    function Product(props: IProduct) {
        return (
            <div className='w-56 h-62 p-5 shadow-sm shadow-slate-900 hover:bg-slate-200'>
                <div className="h-15">
                    <h2 className='text-red-500 font-bold text-lg mb-5'>{props.title}</h2>
                </div>
                <div className='w-9/12 m-auto h-full my-3'>
                    <img className='w-full h-48 object-contain' src={props.productImgs[0]} alt='product-image' />
                </div>
            </div>
        );
    }

    useEffect(() => {
        axios.get<IResponse>('https://ecommerce-api-react.herokuapp.com/api/v1/products')
            .then(res => setProducts(res.data.data.products!))
            .catch(console.error);
    }, []);

    function Content() {
        if (products.length === 0) {
            return (
                <h2 className='text-2xl animate-bounce font-bold text-red-500'>Loading</h2>
            );
        }

        return <>
            {
                products.map(product => <Product {...product} />)
            }
        </>;
    }

    return (
        <>
            <Content />
        </>
    )
}

export default Home