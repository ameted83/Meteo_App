document.querySelector("button").addEventListener("click", getWeatherData);

function getWeatherData(e) {
  e.preventDefault();

  const inputValue = document.querySelector("input").value;
  // console.log(inputValue);
  const weather = new Weather(inputValue);
  const ui = new UI();

  if (inputValue.trim() !== "") {
    weather
      .getWeather()
      .then((data) => {
        // console.log(data);
        ui.insertData(data);
      })
      .catch((error) => console.log(error));
  }
}
