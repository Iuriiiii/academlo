import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useChecker, useComplex, useGlobal } from 'react-simplify';
import { IFilter, IProduct, IResponse, TProducts } from '../models';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { GrCircleInformation } from 'react-icons/gr';
import categories from './../assets/categories.json';
import noProductImg from '/no-product.png';
import Product from './Product';
import Content from './Content';

interface Props { }

const Home = (props: Props) => {
    const [filter, setFilter] = useComplex<IFilter>({ category: 0, name: '' });
    const [allProducts, setAllProducts] = useState<TProducts>([]);
    const [products, setProducts] = useState<TProducts>([]);
    // const session = localStorage.getItem('session');

    useEffect(() => {
        setProducts(allProducts);
    }, [useChecker(allProducts)]);

    useEffect(() => {
        let listProducts = allProducts;

        if (filter.category !== 0) {
            listProducts = listProducts.filter(product => product.category.id === filter.category);
        }

        if (filter.name.length > 0) {
            listProducts = listProducts.filter(product => product.title.includes(filter.name));
        }

        if (listProducts.length === 0)
            listProducts.push({ title: 'Not Found', price: '10000.00', productImgs: [noProductImg], category: { id: 0, name: '', status: '' }, id: 0, status: 'active', user: { email: '', firstName: '', id: 0, lastName: '', phone: '', role: '', status: '' }, description: '' });

        setProducts(listProducts);

    }, [useChecker(filter)]);



    useEffect(() => {
        axios.get<IResponse>('https://ecommerce-api-react.herokuapp.com/api/v1/products')
            .then(res => setAllProducts(res.data.data.products!))
            .catch(console.error);
    }, []);

    function Selector() {
        function selectChange(e: React.ChangeEvent<HTMLSelectElement>) {
            setFilter({ category: parseInt(e.target.value) });
        }

        return <div className='w-56 h-62 p-5 shadow-sm shadow-slate-900 hover:bg-slate-200 flex justify-center items-center flex-col'>
            <label>
                Title:
                <input value={filter.name} className='w-full border-b-2 border-black' type='text' autoFocus onChange={(e) => setFilter({ name: e.target.value })} />
            </label><br />
            <label>
                Category:
                <select value={filter.category} onChange={selectChange} className='w-full border-b-2 border-black'>
                    <option key={0} value='0'>All</option>
                    {
                        categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
                    }
                </select>
            </label>
        </div>
    }

    return (
        <>
            <Selector />
            <Content products={products} />
        </>
    )
}

export default Home