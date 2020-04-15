import React from 'react'

export const Weather = ({ weather }) => {
  console.log(weather)
  if (weather == 0) {
    return (<div></div>)
  } else {
    const temp = Math.floor(weather.main.temp - 273)
    const wind = Math.floor(weather.wind.speed * 1.609)
    return (
      <div className="container">
        <p>Температура: {temp}°C</p>
        <p>Ветер: {wind} км/час</p>
      </div>
    )
  }
}
