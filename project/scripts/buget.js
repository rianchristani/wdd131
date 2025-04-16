const buildingTypes = [
    { name: "Residential" },
    { name: "Commercial" },
    { name: "Industrial" },
    { name: "Institutional" },
    { name: "Recreational" },
    { name: "Mixed-Use" },
    { name: "Skyscrapers" },
    { name: "Historic" },
    { name: "Smart Buildings" },
    { name: "Temporary Structures" }
];

const volumeRanges = [
    { name: "1 m³ - 50 m³" },
    { name: "51 m³ - 100 m³" },
    { name: "101 m³ - 250 m³" },
    { name: "251 m³ - 500 m³" },
    { name: "501 m³ - 1000 m³" },
    { name: "1001 m³ - 2500 m³" },
    { name: "2501 m³ - 5000 m³" },
    { name: "5001 m³ - 10,000 m³" },
    { name: "10,001 m³ - 25,000 m³" },
    { name: "25,001 m³ - 50,000 m³" }
];

GetProducts(buildingTypes, "typeOfBuilding")
GetProducts(volumeRanges, "sizeOfBuilding")

function GetProducts(objectList, id){
    const selectElement = document.querySelector(`#${id}`);
        
    objectList.forEach(productsL =>{
        let object = document.createElement("option")
        object.setAttribute("value", productsL.name);

        object.textContent = productsL.name;

        selectElement.appendChild(object)
        }
    )
  }

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let submitCount = localStorage.getItem("submitCount") || 0;

    submitCount = parseInt(submitCount) + 1;

    localStorage.setItem("submitCount", submitCount);

    window.location.href = "submited.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const submitCount = localStorage.getItem("submitCount") || 0;
  document.querySelector("#submitCount").textContent = submitCount;});


const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear()

lastModified.innerHTML = document.lastModified