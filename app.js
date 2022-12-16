var url = "https://localhost:7274/";

document.addEventListener("DOMContentLoaded",list)
function list(){
    fetch(`${url}City/GetCities`)
    .then(response=>response.json())
    .then(cities=>{
       
       var html = cities.map(c=>{
            return(`<tr>
            <td>${c.id}</td>
            <td>${c.name}</td>
            </tr>       
          `)
           
        }).join(" ")

        document.getElementById("cities").innerHTML=html
        
    })
    .catch(err=> console.log(err))
}

function add(){
    let payload={
        name:document.getElementById("name").value
    }
    fetch(`${url}City/Add`,{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{"Content-Type":"application/json; charset=UTF-8"}
    })
    .then(response =>response.json())
    .then(city=>{
        console.log(city)
    })
    .catch(err=>{
        console.log(err)
    })
}