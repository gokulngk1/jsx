import React, { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'


const OWM_KEY = import.meta.env.VITE_OWM_KEY || '4e8a86f79d5484ae4cda8af753e9e97f'


export default function App() {
const [query, setQuery] = useState('')
const [weather, setWeather] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
// Optional: fetch a default city on load
fetchWeatherByCity('New Delhi')
}, [])

async function fetchWeatherByCity(city) {
if (!OWM_KEY) {
setError('Missing OpenWeatherMap API key. Put it in .env as VITE_OWM_KEY')
return
}


try {
setLoading(true)
setError(null)
setWeather(null)
const res = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${OWM_KEY}`
)
if (!res.ok) throw new Error('City not found')
const data = await res.json()
setWeather(data)
} catch (err) {
setError(err.message)
} finally {
setLoading(false)
}
}


function handleSearch(e) {
e.preventDefault()
if (!query.trim()) return
fetchWeatherByCity(query.trim())
}

function handleLocateMe() {
if (!navigator.geolocation) return setError('Geolocation not supported')
setLoading(true)
setError(null)
navigator.geolocation.getCurrentPosition(async (pos) => {
const { latitude, longitude } = pos.coords
try {
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${OWM_KEY}`)
if (!res.ok) throw new Error('Unable to fetch location weather')
const data = await res.json()
setWeather(data)
} catch (err) {
setError(err.message)
} finally {
setLoading(false)
}
}, (err) => {
setLoading(false)
setError(err.message)
})
}
return (
<div className="min-h-screen bg-gradient-to-br from-sky-50 to-slate-100 p-6 flex items-center justify-center">
<div className="max-w-xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6">
<h1 className="text-2xl font-semibold mb-4">Weather App</h1>


<form onSubmit={handleSearch} className="flex gap-2 mb-4">
<input
value={query}
onChange={(e) => setQuery(e.target.value)}
placeholder="Search city (e.g. London)"
className="flex-1 border rounded-md px-3 py-2"
/>
<button type="submit" className="px-4 py-2 rounded-md bg-sky-500 text-white">Search</button>
<button type="button" onClick={handleLocateMe} className="px-3 py-2 rounded-md border">📍</button>
</form>


{loading && <p>Loading…</p>}
{error && <p className="text-red-600">{error}</p>}
{weather && <WeatherCard data={weather} />}


<footer className="mt-6 text-sm text-slate-600">Powered by OpenWeatherMap • Units: °C</footer>
</div>
</div>
)
}