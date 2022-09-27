import axios from "axios";
import { useEffect, useState } from "react";
import example from './assets/res.json';
import loading from '/loading.png';
import forbidden from '/forbidden.png';
import error from '/error.png';

type TWeatherAPI = typeof example;

function round2(num: number): number {
    return Math.round(num * 100) / 100;
}

function App() {
    let [weather, setWeather] = useState<TWeatherAPI | null | undefined | boolean>(null);

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function (position) {
            // setLocation(position.coords);
            const KEY = 'fffb1c1d7bb9f2549a9c579f4c922a63'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY}&units=metric`
            axios.get<TWeatherAPI>(URL)
                .then(res => setWeather(res.data))
                .catch(() => setWeather(undefined));
        }, function () {
            setWeather(false);
        });

    }, []);

    function Loading() {
        return (
            <div className='w-1/6 md:w-1/12'>
                <img src={loading} className='w-full animate-spin' />
            </div>
        );
    }

    function Forbidden() {
        return (
            <div className='flex flex-col justify-center items-center'>
                <div className='w-2/6 md:w-3/12'>
                    <img src={forbidden} className='w-full animate-spin' />
                </div>
                <h2 className='text-2xl text-red-600'>Unable to use</h2>
            </div>
        );
    }

    function Error() {
        return (
            <div className='flex flex-col justify-center items-center'>
                <div className='w-2/6 md:w-3/12'>
                    <img src={error} className='w-full' />
                </div>
                <h2 className='text-2xl text-yellow-300'>Error to contact with the API</h2>
            </div>
        );
    }

    function Panel() {
        const [isCelsius, setIsCelsius] = useState(false);
        weather = weather as TWeatherAPI;
        return (
            <div className='text-emerald-100 text-center bg-slate-600 rounded p-3'>
                <h2 className='text-2xl'>{weather!.name}, {weather!.sys.country}</h2>
                <span className="text-md font-bold underline underline-offset-4">{weather!.weather[0].description}</span>
                <img className='' src={`http://openweathermap.org/img/wn/${weather!.weather[0].icon}@4x.png`} />
                <ul>
                    <li className='flex justify-between'><span className='font-bold'>Wind Speed: </span>{weather!.wind.speed} m/s</li>
                    <li className='flex justify-between'><span className='font-bold'>Clouds: </span>{weather!.clouds.all}%</li>
                    <li className='flex justify-between'><span className='font-bold'>Preasure: </span>{weather!.main.pressure} hPa</li>
                    <li className='flex justify-between'><span className='font-bold'>Temperature: </span><div>{round2((!isCelsius ? weather!.main.temp * (9 / 5) + 32 : weather!.main.temp))} °<button className='bg-slate-700 w-6 m-0' type='button' onClick={() => setIsCelsius(!isCelsius)}>{isCelsius ? 'C' : 'F'}</button></div></li>

                </ul>
            </div>
        );
    }

    function Content() {
        switch (weather) {
            case null:
                return <Loading />;
                break;
            case undefined:
                return <Error />;
                break;
            case false:
                return <Forbidden />;
                break;
            default:
                return <Panel />;
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-slate-800">
            <Content />
        </div>
    )
}

export default App
