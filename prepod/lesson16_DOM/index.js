// DOM 
// Document Object Model

// добыча элемента по айди
// const elem = document.getElementById('someId');
// console.log(elem);

// добыча элементов по классу
// const elems = [...document.getElementsByClassName('someClass')];
// console.log(elems);

// добыча элемента по css селектору
// const elems = document.querySelector('body > .someClass');
// console.log(elems);

// добыча элементов по css селектору
// const elems = document.querySelectorAll('.someClass');
// console.log(elems);



// const liveCollection =  document.getElementsByClassName('someClass');
// const deadCollection = document.querySelectorAll('.someClass');
// const wrapper = document.getElementById('wrapper');

// wrapper.addEventListener('click', ({target}) => {
//     target.remove()
//     console.log(liveCollection);
//     console.log(document.querySelectorAll('.someClass'));
// });



// event listeners

// const btn = document.getElementById('btn');

// btn.addEventListener('click', (e) => {
//     console.log('click', e);
// });

// btn.addEventListener('mouseover', () => {
//     console.log('smick');
// });

// btn.addEventListener('dblclick', () => {
//     console.log('DOUBLE CLICK');
// });



// DOM CRUD

// const btnOk = document.getElementById('ok');
// const input = document.getElementById('inp');
// const ul = document.getElementById('ul');

// console.log(btnOk.innerText);
// console.log(input.value); // то что пишет пользователь
// console.log(ul.innerHTML);

// console.log(ul.innerText);
// console.log(ul.innerHTML);

// ul.innerText = '<div>this is div</div>';
// ul.innerHTML = '<div>this is div</div>';


// const btnOk = document.getElementById('ok');
// const input = document.getElementById('inp');
// const ul = document.getElementById('ul');
// const lis = [...ul.querySelectorAll('li')];

// btnOk.addEventListener('click', () => {
//     console.log(lis);

//     // lis.find(() => {})
//     // lis.filter(() => {})
//     lis[0].remove(); // САМОУНИЧТОЖАЕТ ЭЛЕМЕНТ!
// });

// const hey = document.getElementById('btn');
// let counter = 0;
// hey.addEventListener('click', () => {
//     const li = lis[0];
//     const liClone = li.cloneNode(true);
//     liClone.innerText = ++counter;
//     ul.append(liClone); // ДОБАВИТЬ ЭЛЕМЕНТ В КОНЕЦ КАК ДОЧЕРНИЙ
//     // ul.prepend(liClone); // ДОБАВИТЬ ЭЛЕМЕНТ В НААЛО КАК ДОЧЕРНИЙ
//     // ul.insertBefore(liClone, lis[2]); // ДОБАВИТЬ ЭЛЕМЕНТ ПЕРЕД ДРУГИМ ЭЛЕМЕНТОМ

//     // ul.insertAdjacentHTML('beforeend', liClone);
// });





// PARENT ELEMENT, NEXT ELEMENT, PREV ELEMENT, CHILDREN[i]
// const btnOk = document.getElementById('ok');
// const input = document.getElementById('inp');
// const ul = document.getElementById('ul');
// const lis = [...ul.querySelectorAll('li')];

// lis.forEach((li) => {
    // li.addEventListener('click', () => {
        // console.log(li.parentElement); // ПОЛУЧИТЬ ССЫЛКУ НА ДОМ УЗЕЛ РОДИТЕЛЯ
        // console.log(li.nextElementSibling);
        // console.log(li.previousElementSibling);
        // console.log(li.parentElement.children[2]);
    // });
// });


// Делегирование обработки событий
// const btnOk = document.getElementById('ok');
// const input = document.getElementById('inp');
// const ul = document.getElementById('ul');
// const lis = [...ul.querySelectorAll('li')];

// Вместо forEach на каждый элемент, вешаем обработку события на родителя
// ul.addEventListener('click', (event) => {
//     console.log(event.target.innerText);
//     console.dir(event.currentTarget);
// });



// EVENT BUBBLING
// const one = document.getElementById('one');
// const two = document.getElementById('two');
// const three = document.getElementById('three');

// one.addEventListener('click', (e) => {
//     console.log('one');
// }, true);

// two.addEventListener('click', (e) => {
//     e.stopPropagation();
//     // e.stopImmediatePropagation();
//     console.log('two');
// }, true);

// two.addEventListener('click', () => {
//     console.log('two SECOND FUNC');
// }, true);

// three.addEventListener('click', (e) => {
//     console.log('three');
// });



// Prevent default

// const link = document.getElementById('link');

// link.addEventListener('click', (e) => {
//     e.preventDefault();
// });

// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// });




// classlist

// const ul = document.getElementById('ul');
// ul.addEventListener('click', ({target}) => {

//     target.classList.toggle('selected');
//     console.log(target.classList);

// });



// Remove event listener

// const okBtn = document.getElementById('ok');

// const func = () => {
//     console.log('click');
// };

// okBtn.addEventListener('click', func);

// // okBtn.remove();

// okBtn.removeEventListener('click', func);


// TODO: attrs, 

// create

const newElemet = document.createElement('h2');
newElemet.innerText = 'NEW ELEM FROM JS';
newElemet.classList.add('someclass', 'asdasdasd');

const elemText = `<div id="myelem" class="asdasd"> sdasd </div>`;
document.body.insertAdjacentHTML(elemText);
const elemDOMNode = document.getElementById('myelem');
elemDOMNode.addEventListener('click', () => {});

document.body.prepend(newElemet);