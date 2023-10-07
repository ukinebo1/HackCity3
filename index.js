 let burger = document.querySelector('#hamburger');
 let menuList = document.querySelector('#menu');

 let darkButton = document.querySelector('#darkBtn')
 let body=document.querySelector('#body')

 //add a click event

 burger.addEventListener('click', ()=>{
    if(menuList.classList.contains('hidden')){
        menuList.classList.remove('hidden')
    }else{
        menuList.classList.add('hidden')
    }
 })

//  darkButton.addEventListener('click', ()=>{
//     body.classList.toggle('dark')

//  })

function darkVersion(){
    document.documentElement.classList.toggle('dark')
}