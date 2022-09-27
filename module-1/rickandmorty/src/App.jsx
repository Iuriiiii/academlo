
import { useEffect, useState } from 'react';
import locations from '../public/locations.json';
import axios from 'axios';
import rickAndMorty from '/rick-and-morty.svg';
import unknown from '/unknown.svg';
import male from '/male.png';
import female from '/female.png';


const ENDP = 'https://rickandmortyapi.com/api';

function App() {
    const [characters, setCharacters] = useState(null);
    const [location, setLocation] = useState(Math.floor(1 + Math.random() * 125));

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${location}`)
            .then(res => setCharacters(res.data.residents))
            .catch(console.error);
    }, [location]);

    function CardSkeleton() {
        return (
            <div className='bg-slate-900 rounded w-60 h-64'>
                {/* <div className='bg-slate-500 w-40 h-40 animate-pulse'></div> */}
            </div>
        )
    }

    function Card(props) {
        const [character, setCharacter] = useState(null);

        useEffect(() => {
            axios.get(props.url)
                .then(res => setCharacter(res.data))
                .catch(console.error);
        }, []);

        if (character === null)
            return <Loading />;

        console.log(character);

        return (
            <div className='relative bg-slate-900 rounded w-64 h-64'>
                <div className='w-full h-full top-0'>
                    <img className='rounded object-fill' src={character.image} alt='rickandmorty-image' />
                </div>
                <h3 className='absolute top-0 text-center text-2xl w-full font-bold bg-gradient-to-b text-white from-black to-transparent'>{character.name}</h3>
                <img className='absolute bottom-1 right-1' src={character.gender === 'Male' && male || character.gender === 'Female' && female || character.gender === 'Unknown' && unknown}>
                </img>
                {character.status === 'alive' ? <span className='text-red-600 absolute left-1 bottom-1 animate-ping'>❤</span> : <span className='absolute left-1 bottom-1  animate-ping'>💀</span>}
            </div>
        )

    }

    function Loading() {
        return <h1 className='text-2xl font-bold text-orange-400 animate-bounce'>Loading</h1>
    }

    function NoCharacters() {
        return <h1 className='text-2xl font-bold text-orange-400 animate-bounce'>No characters found</h1>
    }

    function Content() {
        switch (characters) {
            case null:
                return <Loading />;
                break;
            default:
                // console.log(characters);
                return typeof characters === 'object' && characters.length === 0 ? <NoCharacters /> : characters.map(character => <Card key={character.id} url={character} />)
        }
    }

    return (
        <div className='bg-gradient-to-br from-gray-900 to-slate-700'>
            <div className='container mx-auto space-y-5'>
                <div className='h-2/12 flex flex-col items-center gap-4 pt-3'>
                    <div className='w-72 h-20 relative'>
                        <img src={rickAndMorty} alt='logo' />
                    </div>

                    <datalist id="all-locations">
                        {
                            locations.results.map(
                                location => <option key={location.id} value={location.name} />
                            )
                        }
                    </datalist>

                    <input className='w-5/6 p-2' type='list' list='all-locations' />
                </div>

                <div className='flex flex-row items-center flex-wrap gap-4 justify-center py-3'>
                    <Content />
                </div>
            </div>
        </div>
    )
}

export default App
