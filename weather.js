class Weather {
  constructor(city) {
    this.apiKey = "d47d35f735bdb15f6d3f7ebef1c799f4";
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`
    );
    const data = await response.json();
    return data;
  }

  changeCity(city) {
    this.city = city;
  }
}
