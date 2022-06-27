let btn = document.querySelector('#btn');
btn.addEventListener('click', changeTitle);

let boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', changeColor);
}

function changeTitle() {
    document.querySelector('#title').innerHTML = "Bonjour tout le monde"
}

function changeColor() {
    // this.classList.add('bg-color'); // à faire
    // this.classList.toggle('bg-color');
    // this.style.backgroundColor = "black"; à ne pas faire
    this.classList.add('translate');


}

const boxContainer = document.querySelector('.box-container');

const btnAdd = document.querySelector('.btn-add-box');
btnAdd.addEventListener('click', addNewBox);


function addNewBox(){
    // boxContainer.innerHTML = boxContainer.innerHTML + '<div class="box box-4">box 4</div>';

    const boxNode = document.createElement('div');
    boxNode.innerText = "box 4";
    boxNode.classList.add('box');
    boxNode.classList.add('box-1');
    boxContainer.appendChild(boxNode);
}


let title = document.querySelector('#title');

console.log(title.nextElementSibling.nextElementSibling.children[2]);

// previousElementSibling; parentElement 
