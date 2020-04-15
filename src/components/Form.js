import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { WeatherContext } from '../context/weather/WeatherContext'

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const weather = useContext(WeatherContext)

  const submitHandler = event => {
    event.preventDefault()

    if (value.trim()) {
      weather.fetchWeather(value.trim()).then(() => {
      }).catch(() => {
        alert.show('Введи корректное наименование города', 'danger')
      })
      setValue('')
    } else {
      alert.show('Забыл указать город?')
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="В каком городе хочешь узнать погоду?"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
    </form>
  )
}
