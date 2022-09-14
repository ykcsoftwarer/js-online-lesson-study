console.log("**** app.js *******");

const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.querySelector("lang-list");

const newUl = document.createElement("ul");
//langList.appendChild(newUl);

//? addBtn event handler
addBtn.addEventListener('click', ()=> {
    if(!langInput.value){
        alert("please enter a language");
    }   else {
        newUl.innerHTML = `<li>${langInput.value}</li>`;
        langInput.value = "";
    }
    langInput.focus();
});

//? delete Btn event handler
deleteBtn.addEventListener("click", () => {
    newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("There is no item to delete");

});

//? enter key event handler
langInput.addEventListener('keydown', (event) => {
    // console.log(event);
    // console.log(event.target);
    //  console.log(event.keyCode);
    //  console.log(event.code);

    if(event.keyCode === 13)  {
        addBtn.click();
    }

    if(event.code === 'Delete') {
        deleteBtn.click();
    }

    if  (event.keyCode === 46) {
        deleteBtn.click();
    }
});


//? del key event handler


//? onload event handler
window.addEventListener('load', () => {
    langInput.focus();
});