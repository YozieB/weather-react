import Header from './Header/Header'
import Widget from './Widget/Widget'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { api } from '../utils/api'
import { useEffect, useState } from 'react'
function App() {
  document.body.classList.add('page')

  const [city, setCity] = useState('')
  const [temp, setTemp] = useState(0)
  const [descr, setDescr] = useState('')
  const [visibility, setVisibility] = useState(0)
  const [tempFeels, setTempFeels] = useState(0)
  const [windSpeed, setWindSpeed] = useState(0)
  const [humidity, setHumidity] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [imageClass, setImageClass] = useState('')

  useEffect(() => {
    api.getWeather().then(res => {
      console.log(res)
      setCity(res.name)
      setTemp(Math.floor(res.main.temp))
      setDescr(
        res.weather[0].description[0].toUpperCase() +
          res.weather[0].description.slice(1)
      )
      setVisibility(res.visibility / 1000)
      setTempFeels(Math.floor(res.main.feels_like))
      setWindSpeed(res.wind.speed)
      setHumidity(res.main.humidity)

      switch (res.weather[0].main) {
        case 'Clouds':
          if (res.weather[0].icon.includes('n')) {
            setImageClass('widget__img_cloudy_night')
          }
          if (res.weather[0].icon.includes('d')) {
            setImageClass('widget__img_cloudy_day')
          }
          break
        case 'Clear':
          if (res.weather[0].icon.includes('n')) {
            setImageClass('widget__img_clear_night')
          }
          if (res.weather[0].icon.includes('d')) {
            setImageClass('widget__img_clear_day')
          }
          break
        case 'Rain':
          if (res.weather[0].icon.includes('n')) {
            setImageClass('widget__img_rain_night')
          }
          if (res.weather[0].icon.includes('d')) {
            setImageClass('widget__img_rain_day')
          }
          break
        case 'Snow':
          if (res.weather[0].icon.includes('n')) {
            setImageClass('widget__img_snow_night')
          }
          if (res.weather[0].icon.includes('d')) {
            setImageClass('widget__img_snow_day')
          }
          break
        case 'Thunderstorm':
          setImageClass('widget__img_thunder')
          break
        case 'Drizzle':
          setImageClass('widget__img_drizzle')
          break
        default:
          setImageClass('widget__img_clear_day')
      }

      setIsOpen(true)
    })
  }, [])

  return (
    <>
      <Header isOpen={isOpen} />
      <Main>
        <Widget
          isOpen={isOpen}
          city={city}
          temp={temp}
          descr={descr}
          visibility={visibility}
          tempFeels={tempFeels}
          windSpeed={windSpeed}
          humidity={humidity}
          imageClass={imageClass}
        />
      </Main>
      <Footer isOpen={isOpen} />
    </>
  )
}

export default App
