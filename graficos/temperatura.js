var latitude =-23.8389203;
var longitude = -50.2334137;

const url2 = "https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"


async function Temperatura(){
    
    const res2 = await fetch(url2)
    const dados2 = await res2.json()
    console.log(dados2);

    const data = (dados2.current.time)

    const temperatura = (dados2.current.temperature_2m)
    const celsios = (dados2.hourly_units.temperature_2m)

 const paragrafo2 = document.createElement('p')   
 paragrafo2.classList.add('graficos-container__texto')

 
 paragrafo2.innerHTML = `
 Dia  
 <span> ${data} </span>
 Temperatura  
 <span> ${temperatura} </span>  <span> ${celsios} </span> 

 Localização 
 <span> ${latitude} </span>  <span> ${longitude} </span>
 
 `

const container2 = document.getElementById("graficos-container")
container2.appendChild(paragrafo2)

}

Temperatura();