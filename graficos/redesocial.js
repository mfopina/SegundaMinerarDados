const url1 = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"

async function redesSociais(){
    
    const res1 = await fetch(url1)
    const dados1 = await res1.json()
    console.log(dados1);

    const Facebook = (dados1.Facebook)
    

 const paragrafo1 = document.createElement('p')   
 paragrafo1.classList.add('graficos-container__texto')   
 
 paragrafo1.innerHTML = `
 Quantidade de Pessoas que utilizam o Face 
 <span> ${Facebook} </span> `

const container1 = document.getElementById("graficos-container")
container1.appendChild(paragrafo1)

}

redesSociais();