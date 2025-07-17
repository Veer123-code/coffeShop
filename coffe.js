const menuOpenbtn = document.getElementById("menu-open-button");
const Closebtn = document.getElementById("menu-close-button");



menuOpenbtn.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu")
   

})

Closebtn.addEventListener("click",()=> menuOpenbtn.click());

