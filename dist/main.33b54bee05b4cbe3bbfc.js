/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    if (cityData.timezone >= 0) timezone.textContent = `GMT: + ${cityData.timezone}`;
    if (cityData.timezone < 0) timezone.textContent = `GMT: ${cityData.timezone}`;
  }

  return {
    setValues
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateDOM);

/***/ }),

/***/ "./src/format-string.js":
/*!******************************!*\
  !*** ./src/format-string.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function formatString(string) {
  return string.trim().charAt(0).toUpperCase() + string.trim().slice(1).toLowerCase();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatString);

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _format_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./format-string */ "./src/format-string.js");


const weather = (() => {
  const getCityCoordinates = async cityName => {
    try {
      const formattedName = (0,_format_string__WEBPACK_IMPORTED_MODULE_0__["default"])(cityName);
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${formattedName}&limit=5&appid=c4b936ae0fb7d7f90af87644c836f5b6`, {
        mode: "cors"
      });
      const cityData = await response.json();
      const coordinates = {
        lat: cityData[0].lat,
        lon: cityData[0].lon
      };
      return coordinates;
    } catch (error) {
      throw new Error(`"${cityName}" not found`);
    }
  };

  const getCityWeather = async name => {
    try {
      const coordinates = await getCityCoordinates(name);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=c4b936ae0fb7d7f90af87644c836f5b6&units=metric`, {
        mode: "cors"
      });
      const jsonCity = await response.json();
      const cityData = {
        name: jsonCity.name,
        country: jsonCity.sys["country"],
        timezone: jsonCity.timezone / 3600,
        description: jsonCity.weather[0]["description"],
        temp: jsonCity.main["temp"],
        humidity: jsonCity.main["humidity"],
        wind: jsonCity.wind["speed"]
      };
      return cityData;
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    getCityWeather
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/UI.js");



const searchButton = document.querySelector("#search-btn");
const input = document.querySelector("#search-input");
input.addEventListener("submit", e => {
  e.preventDefault();
});
searchButton.addEventListener("click", async e => {
  e.preventDefault();
  if (input.value === "") return;
  const data = await _weather__WEBPACK_IMPORTED_MODULE_1__["default"].getCityWeather(input.value);
  _UI__WEBPACK_IMPORTED_MODULE_2__["default"].setValues(data);
});
})();

/******/ })()
;
//# sourceMappingURL=main.33b54bee05b4cbe3bbfc.js.map