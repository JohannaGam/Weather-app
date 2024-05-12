let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

function askCity() {
  let city = prompt("Enter a city:");
  city = city.trim();
  city = city.toLocaleLowerCase();
  capital = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  if (weather[city] !== undefined) {
    let temperature = weather[city].temp;
    temperature = Math.round(temperature);
    let fahrenheit = (temperature * 9) / 5 + 32;
    let humidity = weather[city].humidity;
    alert(
      `It is currently ${temperature} °C ( ${fahrenheit}°F) in ${capital} with a humitditiy of ${humidity} %`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  }
}
askCity();
