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