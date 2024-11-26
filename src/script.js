let navButton = document.querySelector('.nav__content_burger');
let navButtonSpan = document.querySelector('.nav__content_burger_span');
let burgerMenu = document.querySelector('.burger-menu');
let burgerMenuItems = document.querySelectorAll('.burger-menu__list');
let body = document.querySelector('body');
let bodyForm = document.querySelector('.body__form');
let formCloseButton = document.querySelector('.form__close-button');
let formOpenButton = document.querySelector('.header__button');
let opacity = document.querySelector('.opacity_div');
// let navListItems = document.querySelectorAll('.nav__list');
// let links = document.querySelectorAll('.nav__list .nav__list__item_link');
let link1 = document.querySelector('#link-1');
let link2 = document.querySelector('#link-2');
let link3 = document.querySelector('#link-3');
let link4 = document.querySelector('#link-4');
let link5 = document.querySelector('#link-5');
let link6 = document.querySelector('#link-6');
let link7 = document.querySelector('#link-7');
let item1 = document.querySelector('#item-1');
let item2 = document.querySelector('#item-2');
let item3 = document.querySelector('#item-3');
let item4 = document.querySelector('#item-4');
let item5 = document.querySelector('#item-5');
let item6 = document.querySelector('#item-6');
let item7 = document.querySelector('#item-7');

let links = [link1, link2, link3, link4, link5, link6, link7];
let items = [item1, item2, item3, item4, item5, item6, item7];

navButton.addEventListener('click', function() {
    navButtonSpan.classList.toggle('active');
    burgerMenu.classList.toggle('active');
});

document.addEventListener('keyup', function(key) {
    if (key.keyCode === 27 && burgerMenu.classList.contains('active')) {
        burgerMenu.classList.toggle('active');
    }
});

formOpenButton.addEventListener('click', function() {
    bodyForm.classList.toggle('hidden');
    formCloseButton.classList.toggle('hidden');
    opacity.classList.toggle('active')
});

formCloseButton.addEventListener('click', function() {
    bodyForm.classList.toggle('hidden');
    formCloseButton.classList.toggle('hidden');
    opacity.classList.toggle('active')
});

document.addEventListener('keyup', function(key) {
    if (key.keyCode === 27 && !bodyForm.classList.contains('hidden')) {
        bodyForm.classList.toggle('hidden');
        formCloseButton.classList.toggle('hidden');
        opacity.classList.toggle('active')
    }
});

for (let burgerMenuItem of burgerMenuItems) {
    burgerMenuItem.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navButtonSpan.classList.toggle('active');
    })
};

for (let link of links) {
    link.addEventListener('click', function () {
        for (let i = 0; i < links.length; i ++) {
            links[i].classList.remove('active')
        };
        link.classList.add('active');
    })
}

// for (let link of links) {
//     link.addEventListener('click', function () {
//         for (let i = 0; i < links.length; i ++) {
//             links[i].classList.remove('active')
//         };
//         link.classList.add('active');
//         window.onscroll = function () {
//             let currentPosition = window.scrollY;
//             console.log(window.scrollY)
//             var z = currentPosition; 
//             var pixelsPre = currentPosition - 200;
//             var pixelNext = currentPosition + 200;
//             console.log(pixelsPre + 'вот'
//             )
//             if (z > pixelsPre && z < pixelNext) {
//                 for (let i = 0; i < links.length; i ++) {
//                 links[i].classList.remove('active');
//             };
//         };
//         };
//         link.classList.add('active');
//         console.log('posledny element')
//     })
// }

// window.onscroll = function () { // отслеживаем скролл
//     let z = document.body.scrollTop; // Получаем высоту передвигаемого сролла
//     let pixels = 100; // Указываем количество пикселей
//     if (z > pixels) {
//         for (let i = 0; i < links.length; i ++) {
//             links[i].classList.remove('active')
//         };
//     }
// }



// ---------------------------------------------------------------------------------------------------------------------------

    //Пытался повесить сброс класса active у ссылки при прокручиваниии страницы на определенное кол-во пикселей, не заработало. 

    // stackOverflow + chatGPT

// ---------------------------------------------------------------------------------------------------------------------------



// window.addEventListener('scroll', function () {
//     var z = document.body.scrollTop;
//     var pixels = 300;
//     if (z > pixels) {
//         for (let i = 0; i < links.length; i ++) {
//             links[i].classList.remove('active')
//         };
//     };
// });

// window.onscroll = function () { // отслеживаем скролл
//     var z = document.body.scrollTop; // Получаем высоту передвигаемого сролла
//     var pixels = 300; // Указываем количество пикселей
//     if (z > pixels){
//         console.log(100) // Для демонстрации вывод сообщения. У себя меняете на выполнение Вашей функции.
//     }
// }        




