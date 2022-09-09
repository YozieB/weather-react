import { api } from '../../utils/api.js'

export default function Widget({
  city,
  temp,
  descr,
  visibility,
  tempFeels,
  windSpeed,
  humidity,
  isOpen,
  imageClass,
}) {
  return (
    <div className='widget'>
      {!isOpen ? (
        <div className='widget__img widget__img_rain_day widget__img_loader'></div>
      ) : (
        ''
      )}
      <div
        className={
          isOpen ? 'widget__heading' : 'widget__heading widget__heading_over'
        }
      >
        <div className={`widget__img ` + imageClass}></div>
        <div className='widget__info'>
          <h1 className='widget__city'>{city}</h1>
          <p className='widget__date'>{api.getDate()}</p>
        </div>
      </div>
      <div className='widget__main'>
        <div
          className={isOpen ? 'widget__temp' : 'widget__temp widget__temp_over'}
        >
          {temp}
        </div>
        <div
          className={
            isOpen ? 'widget__descr' : 'widget__descr widget__descr_over'
          }
        >
          {descr}
        </div>
      </div>
      <ul
        className={
          isOpen ? 'widget__stats' : 'widget__stats widget__stats_over'
        }
      >
        <li className='widget__stats-item'>
          <div className='widget__stats-text'>Видимость</div>
          <div className='widget__stats-range'>{visibility} км</div>
        </li>
        <li className='widget__stats-item'>
          <div className='widget__stats-text'>Ощущается</div>
          <div className='widget__stats-range'>{tempFeels}&#176;</div>
        </li>
        <li className='widget__stats-item'>
          <div className='widget__stats-text'>Влажность</div>
          <div className='widget__stats-range'>{humidity} %</div>
        </li>
        <li className='widget__stats-item'>
          <div className='widget__stats-text'>Ветер</div>
          <div className='widget__stats-range'>{windSpeed} м/с</div>
        </li>
      </ul>
    </div>
  )
}
