const subject = [
    { name: "Request a Quote" },
    { name: "Schedule a Consultation" },
    { name: "General Inquiry" },
    { name: "Project Status Update" },
    { name: "Color and Finish Advice" },
    { name: "Service Availability" },
    { name: "Customer Feedback" },
    { name: "Report an Issue" },
    { name: "Partnership or Business Inquiry" },
    { name: "Employment Opportunities" }
];

GetProducts(subject, "subject");

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