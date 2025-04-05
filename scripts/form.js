const products = [
    {
      id: "fc-1888",
      name: "Flux Capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "Power Laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "Time Circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "Low voltage Reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "Warp Equalizer",
      averagerating: 5.0
    }
  ];

    GetProducts(products);

  function GetProducts(productList){
    const selectElement = document.querySelector("#productName");
        
    productList.forEach(productsL =>{
        let product = document.createElement("option")
        product.setAttribute("value", productsL.name);

        product.textContent = productsL.name;

        selectElement.appendChild(product)
        }
    )
  }

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    let submitCount = localStorage.getItem("submitCount") || 0;

    submitCount = parseInt(submitCount) + 1;

    localStorage.setItem("submitCount", submitCount);

    window.location.href = "review.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const submitCount = localStorage.getItem("submitCount") || 0;
  document.querySelector("#submitCount").textContent = submitCount;});