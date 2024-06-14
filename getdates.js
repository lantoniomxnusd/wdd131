const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModifiedText = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedText.textContent = `Last Modified: ${lastModified}`;

// test