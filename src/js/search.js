const input = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function search(){
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
          console.log(response)
          const data = await response.json();
          console.log(data);
    
          if(data.error){
            input.value = "";
            input.placeholder = data.error.message ;
            input.classList.add("input-error");
          }
          else{
            console.log("success")
            input.value = "";
            WriteData(data)
          }
        };
    
        getRequest();
}
}

searchButton.addEventListener("click", function () {
  search();

});
input.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        search();

    }
});




const WriteData = (data)=>{
  const nowDegree = document.querySelector(".now-degree");
  const nowStatus = document.querySelector(".now-status");
  const locatinText = document.querySelector(".location-text");
  const locationDate = document.querySelector(".location-date");
  const WindSpeed = document.queryS

  nowDegree.innerHTML = `${data.current.feelslike_c}°`;
  nowStatus.innerHTML = `${data.current.condition.text}`;
  locatinText.innerHTML = `${data.location.name}, ${data.location.country}`;
  locationDate.innerHTML = `${data.location.localtime}`;

}


const WriteHourData = (data)=>{
  
  let divCol = document.createElement("div");
  divCol.className = "col-12 col-sm-6 col-md-6 col-xl-3 mt-2 px-1";
  let divCard = document.createElement("div");
  divCard.className = "card bg-theme-secondary ";

}

