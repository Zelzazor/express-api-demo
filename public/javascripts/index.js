document.getElementById("form").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const data = await getData();
    presentData(data);
})


async function getData(){
    const textbox = document.getElementById("search");
    const value = {
        search: textbox.value
    }
    const response = await fetch('/api/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(value)

    });
    const message = await response.json();
    return message;
}

document.addEventListener("DOMContentLoaded", async ()=>{
    const response = await fetch('/api/', {method: "POST"});
    const message = await response.json();
    presentData(message);
});

function presentData(data){
    document.getElementById("city").textContent = " " + data.name;
    document.getElementById("temp").textContent = " " + Math.round(data.main.temp-273) + "°C";
}