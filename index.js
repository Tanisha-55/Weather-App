console.log('Hello Tanisha!');
const API_key = '12f58fd1166be5fc552fb2ac2665269c';

function renderWeatherInfo(data){
    //UI m mapping
        let newPara = document.createElement('p');
        newPara.textContent = `${data?.main?.temp.toFixed(2)} C`;

        document.body.appendChild(newPara);
}

async function showWhether(){
    try{ 
        let city='goa';

        const response = await fetch(`https://api.openweathe map.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        let data = await response.json();
        console.log("weather data" , data);

        renderWeatherInfo(data);
    }
    catch(err){
        //handle the error here.
    }
}
// showWhether();

async function getCustomWeatherDetails(){
    try{
        let latitude = 15.6333;
        let longitude = 18.3333;

        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?${latitude}&${longitude}&appid=${API_key}&units=metric`);
        let data =await result.json();

        console.log(data);
    }
    catch(err){
        console.log("Error Found!");
    }
}

//adding my location using geolocation API
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("no geolocation support");
    }
}

function showPosition(position){
    let lati=position.coords.latitude;
    let longi=position.coords.longitude;

    // let para=document.createElement("p");
    // para.textContent=

    console.log(lati ," ", longi);
}
