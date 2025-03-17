import {useState} from 'react'


export default function WeatherForm({onChangeCity}) {

    const [city, setCity] = useState('');

function handleSubmit(e) {
    e.preventDefault();
    onChangeCity(city);
}

function onChange(e) {
    const value = e.target.value

    if (value !== ''){
        setCity(value)
    }
}

    return <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange} />
        <button onClick={handleSubmit}>Rechercher</button>
    </form>
}