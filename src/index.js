import "./style.css";
import weather from "./weather";
import updateDOM from "./UI";

const searchButton = document.querySelector("#search-btn");
const input = document.querySelector("#search-input");

input.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  if (input.value === "") return;
  const data = await weather.getCityWeather(input.value);
  updateDOM.setValues(data);
});
