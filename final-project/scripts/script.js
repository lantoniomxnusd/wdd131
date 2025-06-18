
const myButton = document.getElementById("myButton");
const menu = document.querySelector(".menuLinks");

if (myButton && menu) {
  myButton.addEventListener("click", () => {
    myButton.classList.toggle("open");
    menu.classList.toggle("open");
  });
}

const materials = [
  {
    id: "our-world",
    title: "National Geographic Our World",
    description:
      "A balanced four-skills English series using real National Geographic content like photos and videos. It connects language learning with real-world themes.",
    img: "images/our-world.webp",
    imgAlt: "National Geographic Our World book",
    imgSide: "right"
  },
  {
    id: "wonderskills",
    title: "McGraw‑Hill WonderSkills",
    description:
      "A five-level reading and writing series designed to develop comprehension and critical thinking in young learners, with engaging authentic texts.",
    img: "images/wonderskills.webp",
    imgAlt: "WonderSkills book cover",
    imgSide: "left"
  },
  {
    id: "oxford-discover",
    title: "Oxford Discover",
    description:
      "An inquiry-based curriculum that helps students develop language skills through big questions, critical thinking, and project-based learning.",
    img: "images/oxford-discover.webp",
    imgAlt: "Oxford Discover book",
    imgSide: "right"
  }
];

const container = document.getElementById('materialList');

materials.forEach(material => {
    const section  = document.createElement('section');
    section.classList.add('card', 'material');

    const heading = document.createElement('h2');
    heading.textContent = material.title;

    const description = document.createElement('p');
    description.textContent = material.description;

    const image = document.createElement('img');
    image.src =material.img;
    image.alt = material.imgAlt;
    image.loading ='lazy';

    section.appendChild(heading);
    section.appendChild(description);
    section.appendChild(image);

    container.appendChild(section);

});



const greeting = document.getElementById("greeting");
const hasVisited = localStorage.getItem("visitedBefore");

if (greeting) {
  greeting.textContent = hasVisited ? "Welcome back!" : "Welcome!";
  if (!hasVisited) localStorage.setItem("visitedBefore", "true");
}

// Show last modified date
const lastModifiedText = document.querySelector("#lastModified");
if (lastModifiedText) {
  lastModifiedText.textContent = `Last Modified: ${document.lastModified}`;
}



