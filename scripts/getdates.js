const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.lastModified;
const lastModifiedText = document.querySelector("#lastModified");


lastModifiedText.textContent = `Last Modified: ${lastModified}`;
