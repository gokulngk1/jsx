export default function WeatherCard({ data }) {
const { name, sys, main, weather, wind } = data
const w = weather && weather[0]
return (
<div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-white to-sky-50 border">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl font-medium">{name}, {sys?.country}</h2>
<p className="text-sm text-slate-600">{w?.description}</p>
</div>
{w && (
<img
alt={w.description}
src={`https://openweathermap.org/img/wn/${w.icon}@2x.png`}
width={80}
height={80}
/>
)}
</div>


<div className="mt-2 grid grid-cols-2 gap-4">
<div>
<div className="text-4xl font-bold">{Math.round(main.temp)}°C</div>
<div className="text-sm text-slate-600">Feels like {Math.round(main.feels_like)}°C</div>
</div>


<div className="text-sm text-slate-700">
<div>Humidity: {main.humidity}%</div>
<div>Pressure: {main.pressure} hPa</div>
<div>Wind: {wind.speed} m/s</div>
</div>
</div>
</div>
)
}