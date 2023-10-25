const input = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function search() {
  if (input.value == "") {
    input.placeholder = "Please enter a valid input";
    input.classList.add("input-error");
  } else {
    days = 1;
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${input.value}&days=${days}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1ecd7b3a4bmsh0dbde887af491d1p196c7djsn04cf08e2113a",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };
    const getRequest = async () => {
      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (data.error) {
        input.value = "";
        input.placeholder = data.error.message;
        input.classList.add("input-error");
      } else {
        console.log("success");
        input.value = "";
        WriteData(data);
        WriteHourData(data);
      }
    };

    getRequest();
  }
}

searchButton.addEventListener("click", function () {
  search();
});
input.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    search();
  }
});

const WriteData = (data) => {
  const nowDegree = document.querySelector(".now-degree");
  const nowStatus = document.querySelector(".now-status");
  const locatinText = document.querySelector(".location-text");
  const locationDate = document.querySelector(".location-date");
  const WindSpeedValue = document.querySelector(".WindSpeedValue");
  const PressureValue = document.querySelector(".PressureValue");
  const SunriseValue = document.querySelector(".SunriseValue");
  const HumidityValue = document.querySelector(".HumidityValue");
  const VisibilityValue = document.querySelector(".VisibilityValue");
  const SunsetValue = document.querySelector(".SunsetValue");

  nowDegree.innerHTML = `${data.current.feelslike_c}°`;
  nowStatus.innerHTML = `${data.current.condition.text}`;
  locatinText.innerHTML = `${data.location.name}, ${data.location.country}`;
  locationDate.innerHTML = `${data.location.localtime}`;
  WindSpeedValue.textContent = `${data.current.wind_kph}`;
  PressureValue.textContent = `${data.current.pressure_mb}` + " mb ";
  SunriseValue.textContent = `${data.forecast.forecastday[0].astro.sunrise}`;
  HumidityValue.textContent = `${data.current.humidity}`;
  VisibilityValue.textContent = `${data.current.vis_km}`;
  SunsetValue.textContent = `${data.forecast.forecastday[0].astro.sunset}`;
};

const WriteHourData = (data) => {
  let nowDateValue = Date.now();

  data.forecast.forecastday[0].hour.forEach((e) => {
    console.log("1");
    const hoursDiv = document.querySelector("#hours");

    let divCol = document.createElement("div");
    divCol.className = "col-12 col-sm-6 col-md-6 col-xl-3 mt-2 px-1";
    let divCard = document.createElement("div");
    divCard.className = "card bg-theme-secondary p-1 m-0";
    let divRow = document.createElement("div");
    divRow.className = "row w-100 m-0 p-0";

    let divLeft = document.createElement("div");
    divLeft.className = "col-5 col-md-6 text-start";
    let leftTextDate = document.createElement("p");
    leftTextDate.className = "m-0 p-0 fs-5 text-secondary text-gk ";
    leftTextDate.textContent = `${e.time.split(" ")[0]}`;
    let leftTextTime = document.createElement("p");
    leftTextTime.className = "m-0 p-0 fs-6 text-white text-gk";
    leftTextTime.textContent = `${e.time.split(" ")[1]}`;
    divLeft.appendChild(leftTextDate);
    divLeft.appendChild(leftTextTime);

    let divRow2 = document.createElement("div");
    divRow2.className = "row m-0 p-0 col-7 col-md-6";

    let divCol6 = document.createElement("div");
    divCol6.className = "col-6 text-end d-flex justify-content-end";
    let col6I = document.createElement("i");
    col6I.className ="bi bi-brightness-high fs-2 d-inline align-items-center d-flex text-white";
    divCol6.appendChild(col6I);

    let divCol62 = document.createElement("div");
    divCol62.className = "col-6 m-0 p-0 text-center justify-content-center";
    let col62Div = document.createElement("div");
    col62Div.className = "align-items-center";
    let col62Degree = document.createElement("p");
    col62Degree.className = "m-0 p-0 fs-5 text-white fw-light text-gk";
    col62Degree.textContent = `${e.temp_c}°`;
    let col62Status = document.createElement("p");
    col62Status.className = "m-0 p-0 fs-6 text-secondary text-gk";
    col62Status.textContent = `${e.condition.text.indexOf("Partly") >= 0 ? e.condition.text.split(" ")[1].charAt(0).toUpperCase() + e.condition.text.split(" ")[1].slice(1) : e.condition.text}`;
    col62Div.appendChild(col62Degree);
    col62Div.appendChild(col62Status);
    divCol62.appendChild(col62Div);
    divRow2.appendChild(divCol6);
    divRow2.appendChild(divCol62);

    divRow.appendChild(divLeft);
    divRow.appendChild(divRow2);
    divCard.appendChild(divRow);
    divCol.appendChild(divCard);

    console.log(divCol);
    hoursDiv.appendChild(divCol);
  });
};
