// const booksList = document.querySelector(".books");
// const booksElem = document.querySelector(".books__item2");

// console.log(booksList.childNodes); // хранит все узлы
// console.log(booksList.children); // хранит только элементы
// console.log(booksElem.parentNode); // узел к родительскому элементу 

// // console.log(booksElem.nextSibling);
// console.log(booksElem.nextElementSibling);

// console.log(booksElem.previousSibling);
// console.log(booksElem.previousElementSibling);


// const text = document.getElementById("text");

// console.log(text.hasAttribute("id"));
// console.log(text.hasAttribute("class"));

// console.log(text.getAttribute("id"));

// text.setAttribute("id", "block");

// // console.log(text.getAttribute("id"));

// text.removeAttribute("id")


// const pass = document.getElementById("pass");
// const show = document.getElementById("show");

// show.addEventListener("click", () => {
//     // if (show.checked) {
//     //     pass.setAttribute("type", "text")
//     // }
//     // else {
//     //     pass.setAttribute("type", "password");
//     // }

//     pass.setAttribute("type", show.checked ? "text" : "password")
// })


// const text = document.getElementById("text");

// // 1 способ
// // const color = text.getAttribute("data-color"); // red
// // text.style.color = color;

// //2 способ
// const color2 = text.dataset.color;
// text.style.color = color2;


// const wrapper = document.querySelector(".wrapper");

// // Добавление нового элемента
// const newEl = document.createElement("h2");
// newEl.innerHTML = "<i>Новый текст<i>";

// // wrapper.append(newEl); 
// // wrapper.prepend(newEl);
// // wrapper.before(newEl)
// wrapper.after(newEl);


const task = document.getElementById('task');
const btnAdd = document.getElementById('btnAdd');
const taskList = document.getElementById('task-list');
const modal = document.querySelector(".modal-wrapper");
const deleteOK = document.getElementById('deleteOK');
const deletoCancel = document.getElementById('deletoCancel');

let itemDel = null;

taskList.addEventListener('click', (event) => {
    if (event.target.closest(".btn-delete")) {
        // event.target.parentNode.remove(); //перви варант
        // event.target.closest('.task-item').remove(); //2 dfhbfyn
        modal.style.display = "flex";
        itemDel = event.target.closest(".task-item");
    }
});

btnAdd.addEventListener("click", () => {
    const newTask = document.createElement("li");
    newTask.className = "task-item"
    newTask.textContent = task.value;
    taskList.prepend(newTask);
    task.value = "";

    const btnDel = document.createElement("button");
    btnDel.className = "btn-delete";
    btnDel.textContent = "удалит";
    newTask.append(btnDel);
    // btnDel.addEventListener('click', (event) => {
    //     event.target.parentNode.remove();
    // });
})

deleteOK.addEventListener('click', (e) => {
    itemDel.remove();
    modal.style.display = "none";
});
deletoCancel.addEventListener('click', () => {
    modal.style.display = "none";
});