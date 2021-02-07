const navBar = document.querySelector('.navbar');
const menuButton = document.querySelector('.menu');
const womensMenu = document.querySelector('.womens-menu');
const mensMenu = document.querySelector('.mens-menu');

menuButton.addEventListener('click', ()=>{
    navBar.classList.toggle('invisible');
})

navBar.addEventListener('click', (evt)=>{
    if(evt.target.id === 'nav1'){
        womensMenu.classList.toggle('invisible');
        const remainingMenu = [...document.querySelectorAll('#nav2, #nav3, #nav4, #nav5')];
        for(const element of remainingMenu){
            element.classList.toggle('invisible');
        }
    } else if (evt.target.id === 'nav2'){
        mensMenu.classList.toggle('invisible');
        const remainingMenu = [...document.querySelectorAll('#nav1, #nav3, #nav4, #nav5')];
        for(const element of remainingMenu){
            element.classList.toggle('invisible');
        }
    }
})

if(window.innerWidth>1035){
    navBar.classList.toggle('invisible');
}