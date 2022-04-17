import formatString from "./format-string";

const weather = (() => {
  const getCityCoordinates = async (cityName) => {
    try {
      const formattedName = formatString(cityName);
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${formattedName}&limit=5&appid=c4b936ae0fb7d7f90af87644c836f5b6`,
        { mode: "cors" }
      );

      const cityData = await response.json();

      const coordinates = {
        lat: cityData[0].lat,
        lon: cityData[0].lon,
      };

      return coordinates;
    } catch (error) {
      throw new Error(`"${cityName}" not found`);
    }
  };

  const getCityWeather = async (name) => {
    try {
      const coordinates = await getCityCoordinates(name);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=c4b936ae0fb7d7f90af87644c836f5b6&units=metric`,
        { mode: "cors" }
      );

      const jsonCity = await response.json();

      const cityData = {
        name: jsonCity.name,
        country: jsonCity.sys["country"],
        timezone: jsonCity.timezone / 3600,
        description: jsonCity.weather[0]["description"],
        temp: jsonCity.main["temp"],
        humidity: jsonCity.main["humidity"],
        wind: jsonCity.wind["speed"],
      };

      return cityData;
    } catch (error) {
      alert(error.message);
    }
  };

  return { getCityWeather };
})();

export default weather;
