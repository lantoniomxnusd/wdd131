const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const year = document.querySelector("#currentYear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModifiedText = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedText.textContent = `Last Modified: ${lastModified}`;

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
	templeName: "Idaho Falls Temple",
  	location: "Idaho Falls, Idaho, United States",
  	dedicated: "1945",
  	area:85624,
  	imageUrl:
  	"images/idahoFalls.webp"
	},
	{
	templeName: "Vancouver Temple",
  	location: "Vancouver, Washington, United States",
  	dedicated: "2025",
  	area:43000,
  	imageUrl:
  	"images/vancouverCanada.webp"
	},
	{
	templeName: "Sacramento California",
	location: "Rancho Cordova, California, United States",
	dedicated: "2006, September, 3",
	area: 19500,
	imageUrl:
		"images/sacramentoCalifornia.webp"
	}

];

createTempleCard(temples);

const nonUtahLink = document.querySelector("#nonUtah");
const newTempleLink = document.querySelector("#newTemple");
const largeTempleLink = document.querySelector("#largeTemple");
const smallTempleLink = document.querySelector("#smallTemple");
const allTemplesLink = document.querySelector("#allTemples");
const oldTempleLink = document.querySelector("#oldTemple");




allTemplesLink.addEventListener("click", () => {
	createTempleCard(temples);
});

nonUtahLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
});

newTempleLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter(temple => {
			const year = parseInt(temple.dedicated.split(",")[0]);
			return year >=2000;
		})
	);
});

oldTempleLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter(temple => {
			const year = parseInt(temple.dedicated.split(",")[0]);
			return year <= 1900;
		})
	);
});

largeTempleLink.addEventListener("click", () => {
	createTempleCard(
		temples.filter(temple => {
			const area = parseInt(temple.area);
			return area >= 90000;
		})
	);
});

smallTempleLink.addEventListener("click", () => {
	const filtered = temples.filter(temple => {
		const area = parseInt(temple.area);
		return area <= 10000;
	});
	console.log("Small temples:", filtered);
	createTempleCard(filtered);
});


function createTempleCard(filteredTemples){
	document.querySelector(".album").innerHTML = "";
	filteredTemples.forEach(temple => {
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
		dedicated.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
		area.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");
	
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".album").appendChild(card);
	});
}
