class UI {
  constructor() {
    this.degree = document.getElementById("degree");
    this.city = document.getElementById("city");
    this.humidity = document.getElementById("humidity");
    this.description = document.getElementById("description");
    this.sunrise = document.getElementById("sunrise");
    this.sunset = document.getElementById("sunset");
  }

  insertData(data) {
    this.degree.textContent = `${Math.round(data.main.temp - 273, 15)}°`;
    this.city.textContent = `${data.name}`;
    this.humidity.textContent = `Humidity: ${data.main.humidity}`;
    this.description.textContent = `Description: ${data.weather[0].description}`;
    this.sunrise.textContent = `Sunrise: ${new Date(
      data.sys.sunrise * 1000
    ).getHours()}`;
    this.sunset.textContent = `Sunset: ${new Date(
      data.sys.sunset * 1000
    ).getHours()}`;
  }
}
