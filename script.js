const apiKey = "633425f5f37f476293e162002252307";

async function getWeather() {
  const city = document.getElementById("search").value;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&units=metric`;
  try {
    console.log(`Fetching weather data for: ${city}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.getElementById("celcius").innerText = `${data.current.temp_c} °C`;
    document.querySelector(".city").innerText = data.location.name;
    document.querySelector(".humidity-value").innerText = `${data.current.humidity}%`;
    document.querySelector(".wind-speed").innerText = `${data.current.wind_kph} km/h`;
    console.log("finished");
    if (data.current.condition.text.toLowerCase().includes("cloud")) {
      document.querySelector(".content img").src = "images/clouds.png";
    }
    else if (data.current.condition.text.toLowerCase().includes("clear")) {
      document.querySelector(".content img").src = "images/clear.png";
    } else if (data.current.condition.text.toLowerCase().includes("rain")) {
      document.querySelector(".content img").src = "images/rain.png";
    } else if (data.current.condition.text.toLowerCase().includes("drizzle")) {
        document.querySelector(".content img").src = "images/drizzle.png";
    } else if (data.current.condition.text.toLowerCase().includes("snow")) {
      document.querySelector(".content img").src = "images/snow.png";
    } else {
      document.querySelector(".content img").src = "images/clouds.png"; 
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Please try again.");
  }
}
