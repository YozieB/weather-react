class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl
    this._token = options.token
    this._lang = options.lang
    this._geoToken = options.geoToken
    this._geoUrl = options.geoUrl
    this.latitude = null
    this.longitude = null
    this._units = options.units
  }

  getDate() {
    let day
    let dayNumber = new Date().getDate()
    let month = new Date().getUTCMonth() + 1
    if (String(month).length < 2) {
      month = '0' + month
    }
    if (String(dayNumber).length < 2) {
      dayNumber = '0' + dayNumber
    }
    let year = new Date().getFullYear()
    switch (new Date().getDay()) {
      case 0:
        day = 'Воскресенье'
        break
      case 6:
        day = 'Суббота'
        break
      case 5:
        day = 'Пятница'
        break
      case 4:
        day = 'Четверг'
        break
      case 3:
        day = 'Среда'
        break
      case 2:
        day = 'Вторник'
        break
      case 1:
        day = 'Понедельник'
        break
      default:
        day = 'Не удалось получить значение'
    }
    return `${day} ${dayNumber}/${month}/${year}`
  }

  async getWeather() {
    const response = await this._getLocation()
    this.latitude = response.latitude
    this.longitude = response.longitude
    return fetch(
      `${this._baseUrl}?lat=${this.latitude}&lon=${this.longitude}&appid=${this._token}&lang=${this._lang}&units=${this._units}`
    ).then(this._getResponse)
  }
  _getLocation() {
    return fetch(`${this._geoUrl}${this._geoToken}`).then(this._getResponse)
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}

const api = new Api({
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
  token: '857343b9e389dc4249ec34d2957b9db8',
  lang: 'ru',
  geoToken: '50ad4a90-fd5e-11ec-b463-1717be8c9ff1',
  geoUrl: 'https://geolocation-db.com/json/',
  units: 'Metric',
})

export { api }
