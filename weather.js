let searchBtn = document.querySelector("#search-btn")
let result = document.querySelector("#result")
let API_KEY = "1d2b2cf941032f02ceb46afd63a78ed0";

const getWeatherData = async () => {
    try {
        let cityName = document.querySelector("#city-name").value.trim();

        if(!cityName){
            result.innerHTML = `<p class="text-red-700 text-center mt-4 font-semibold">Please Enter a City Name...</p>`;
            return;
        }        

        let resopnse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        console.log(resopnse);

        if(!resopnse.ok){
            result.innerHTML = `<p class="text-red-700 text-center mt-4 font-semibold">City Not Found</p>`;
            return;
        }

        let data = await resopnse.json();
        console.log(data);
        
        result.innerHTML = 
        `
        <h1 class="text-2xl text-center font-bold mt-3 text-blue-900">${data.name}, ${data.sys.country}</h1>
        <p class="text-gray-800 font-semibold text-center mt-0.5"> Temprature: ${data.main.temp} °C</p>
        <p class="text-red-700 font-semibold text-center mt-0.5"> wind Speed: ${data.main.speed}m/s</p>

        `
        
    } catch (error) {
        console.log(error, "Error is Fetching weather Details");       
    }
};

searchBtn.addEventListener("click", getWeatherData);

//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 1d2b2cf941032f02ceb46afd63a78ed0