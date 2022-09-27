import { useState } from 'react';
import quotes from './assets/quotes.json';

function getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

const COLORS = [
    'emerald', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange',
    'amber', 'yellow', 'lime', 'green', 'teal', 'cyan', 'sky', 'blue', 'indigo',
    'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

function App() {
    const [state, setState] = useState(getRandom(quotes));
    const color = getRandom(COLORS);

    return (
        <div className={`transition-colors flex justify-center items-center h-screen w-screen font-mono bg-${color}-400`}>
            <div className='flex flex-col items-center justify-between gap-3 w-11/12 h-4/6 sm:max-w-sm sm:h-3/6'>
                <span className='basis-7 text-3'>
                    {state.quote}
                </span>
                <span className='basis-2 font-bold self-end self-'>{state.author}</span>
                <button type='button' onClick={() => {setState(getRandom(quotes))}} className={`basis-1 w-5/6 bg-${color}-300 rounded sm:w-full`}>New</button>
            </div>
        </div>
    )
}

export default App
