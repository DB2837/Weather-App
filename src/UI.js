const updateDOM = (() => {
  function setValues(cityData) {
    if (!cityData) return;

    const card = document.querySelector(".card");
    card.classList.add("active");

    const cityName = document.querySelector("#city");
    const timezone = document.querySelector("#time-zone");
    const description = document.querySelector("#description");
    const temperature = document.querySelector("#temperature");
    const humidity = document.querySelector("#humidity");
    const wind = document.querySelector("#wind");

    cityName.textContent = `${cityData.name}, ${cityData.country}`;

    description.textContent = `${cityData.description}`;
    temperature.textContent = `${cityData.temp} °C`;
    humidity.textContent = `Humidity: ${cityData.humidity} %`;
    wind.textContent = `Wind: ${cityData.wind} km/h`;
    if (cityData.timezone >= 0)
      timezone.textContent = `GMT: + ${cityData.timezone}`;
    if (cityData.timezone < 0)
      timezone.textContent = `GMT: ${cityData.timezone}`;
  }

  return { setValues };
})();

export default updateDOM;
