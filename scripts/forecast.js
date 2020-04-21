const key = 'jRaJ9mQtB4NYe8u4E0lyvvfIGUinKZeL';

//get weather information

const GetWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
    
}



//get city information
const GettheCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query= `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}


/* GettheCity('manchester').then(data => {
    return GetWeather(data.Key).then(data => {
        console.log(data);
    })
}).catch(err => {
    console.log(err);
}) */