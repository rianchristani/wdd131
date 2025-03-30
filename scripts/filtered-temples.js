const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');

    menuButton.classList.toggle('open');
})

const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear()

lastModified.innerHTML = document.lastModified

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 150000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642.jpg"
      },
      {
        templeName: "Curitiba Brazil",
        location: "Curitiba, Brazil",
        dedicated: "2008, june, 1",
        area: 27850,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-4882-thumb.jpg"
      },
      {
        templeName: "Fortaleza Brazil",
        location: "Fortaleza, Brazil",
        dedicated: "2019, June, 2",
        area: 36000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5244.jpg"
      },
  ];

function createTempleCard(filteredTemples) {
    document.querySelector(".grid").innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class=label>Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class=label>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class=label>Size:</span> ${temple.area} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "400");
        image.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector(".grid").appendChild(card);
    });
}

createTempleCard(temples);

const oldF = document.querySelector("#oldFilter");
oldF.addEventListener("click", () => {
    const filteredTemples = temples.filter((temple) => {
        const dedicatedDate = new Date(temple.dedicated);
        return dedicatedDate < new Date(1900, 0, 1);
    });
    createTempleCard(filteredTemples);
});

const newF = document.querySelector("#newFilter");
newF.addEventListener("click", () => {
    const filteredTemples = temples.filter((temple) => {
        const dedicatedDate = new Date(temple.dedicated);
        return dedicatedDate > new Date(2000, 0, 1);
    });
    createTempleCard(filteredTemples);
});

const largeF = document.querySelector("#largeFilter");
largeF.addEventListener("click", () => {
    const filteredTemples = temples.filter((temple) => temple.area > 90000)
    createTempleCard(filteredTemples);
});

const smallF = document.querySelector("#smallFilter");
smallF.addEventListener("click", () => {
    const filteredTemples = temples.filter((temple) => temple.area < 10000)
    createTempleCard(filteredTemples);
});