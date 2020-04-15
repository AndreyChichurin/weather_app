import React, { Fragment, useContext, useEffect } from 'react'
import { Form } from '../components/Form'
import { Weather } from '../components/Weather'
import { Loader } from '../components/Loader'
import { WeatherContext } from '../context/weather/WeatherContext'


export const Home = () => {
  const { loading, weather, fetchWeather } = useContext(WeatherContext)

  return (
    <Fragment>
      <Form />

      <hr />

      <Weather weather={weather} />
    </Fragment>
  )
}
