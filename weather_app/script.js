const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f2e0a92eccmsha3b7dace4a35ad9p1273d2jsn2cbcb44e4b80',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nagpur', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));