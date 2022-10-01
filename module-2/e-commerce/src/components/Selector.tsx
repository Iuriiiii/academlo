import React from 'react'
import { IFilter } from '../models';
import { useComplex } from 'react-simplify';
import categories from './../assets/categories.json';

interface Props { filter: ReturnType<typeof useComplex<IFilter>> }

const Selector = (props: Props) => {
    const [filter, setFilter] = props.filter;

    function selectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilter({ category: parseInt(e.target.value) });
    }

    return <div className='w-56 h-62 p-5 shadow-sm shadow-slate-900 hover:bg-slate-200 flex justify-center items-center flex-col'>
        <input className='w-full border-b-2 border-black' type='text' onChange={(e) => setFilter({ name: e.target.value })} />

        <select onChange={selectChange} className='w-full border-b-2 border-black'>
            <option key={0} value='0'>All</option>
            {
                categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
            }
        </select>
    </div>
}

export default Selector