const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');







button.addEventListener('click', ()=> {
   if (input.value.trim() !== ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList ();
        input.value = '';
        input.focus();
    }
});


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter =>{
        displayList(chapter);
    
});

function displayList(item){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent ='❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () =>{
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
    localStorage.setItem('myFabBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFabBOMList'));
}

function deleteChapter() {
    chapter = chapter.slice(0, chapter.length-1);
    chaptersArray = chaptersArray.filter(item => item !==chapter);
    setChapterList();
}