const location = "";
const days = "";
const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=${days}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ecd7b3a4bmsh0dbde887af491d1p196c7djsn04cf08e2113a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getRequest = async () => {
    const response = await fetch(url, options);
	console.log(response)
    const data = await response.json();
    console.log(data);
}
