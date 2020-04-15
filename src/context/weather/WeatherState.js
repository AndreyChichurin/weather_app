import React, { useReducer } from 'react'
import axios from 'axios'
import { WeatherContext } from './WeatherContext'
import { weatherReducer } from './weatherReducer'
import { SHOW_LOADER, FETCH_WEATHER } from '../types'

export const WeatherState = ({ children }) => {
  const initialState = {
    weather: 0,
    loading: false
  }

  const [state, dispatch] = useReducer(weatherReducer, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchWeather = async (cityName) => {
    showLoader()
    const res = await axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + `${cityName}` + "&appid=6635e429e5b74c230a249d762ead77cc")
    dispatch({
      type: FETCH_WEATHER,
      payload: res.data
    })
  }

  return (
    <WeatherContext.Provider value={{
      showLoader, fetchWeather,
      loading: state.loading,
      weather: state.weather
    }}>
      {children}
    </WeatherContext.Provider>
  )
}
