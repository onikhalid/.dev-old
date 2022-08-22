///////////////////////////
////////THEME SWITCH///////
///////////////////////////
const body = document.querySelector('body');
const switcher = document.querySelector('.switch-input')
let currentTheme = localStorage.getItem("theme")
const currentDataTheme = body.getAttribute('data-theme');





window.addEventListener('DOMContentLoaded', ()=>{
  // default dark themex
  if(currentTheme == null){
    body.setAttribute('data-theme', 'dark')
    localStorage.setItem("theme", 'dark')
  }

  // remember last selected theme
  else if(currentDataTheme == '' && currentTheme == 'dark'){
    body.setAttribute('data-theme', 'dark')
    localStorage.setItem("theme", 'dark')
  }
  else if(currentDataTheme == '' && currentTheme == 'light'){
    body.setAttribute('data-theme', 'light')
    localStorage.setItem("theme", 'light')
  }
  else{
    body.setAttribute('data-theme', currentTheme)
  }

})


// switch theme
switcher.addEventListener('click', ()=>{
  const currentDataTheme = body.getAttribute('data-theme')
  if(currentDataTheme == 'light'){
    body.setAttribute('data-theme', 'dark')
    localStorage.setItem("theme", 'dark')
  }else{
    body.setAttribute('data-theme', 'light')
    localStorage.setItem("theme", 'light')
  }
})














///////////////////////////
////////CUSTOM CURSOR///////
///////////////////////////

// Make shape follow cursor
const cursor = document.getElementById("cursor");
const anchors = document.querySelectorAll('a, button, label');

onmousemove =  (mousePosition)=> {
  const  pos = mousePosition;
    document.addEventListener("mousemove", (mousePosition) => {
      cursor.setAttribute(
        "style",
        "left : " + (pos.x - 15) + "px; top: " + (pos.y - 15) + "px;"
      );
    });

    // Expand cursor on click
    document.addEventListener("click", (mousePosition) => {
      cursor.classList.add("clicked");
      setTimeout(function () {
      cursor.classList.remove("clicked");
    }, 500);
  });
};


// Expand cursor on link hover
const links = Array.from(anchors)
  links.forEach((anchor, index) =>{
    anchor.addEventListener("mouseover", ()=>{
      cursor.classList.add("hover");
    }) 

    anchor.addEventListener("mouseout", ()=>{
      cursor.classList.remove("hover");
    }) 
});







///////////////////////////
/////////TOP BUTTON////////
///////////////////////////
topButton = document.getElementById("topBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = ()=>{
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
}
  
//scroll to the top of the document on click
topFunction = ()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






///////////////////////////
///////// NAV MENU/////////
///////////////////////////
const Ham = document.querySelector('.menu-hamburger');
const nav = document.getElementById('header__nav')

document.addEventListener('click', (event)=>{
  const navClicked = nav.contains(event.target)
  const hamClicked = Ham.contains(event.target)

  if (!navClicked){

      // handle events when ham menu is clicked
      if(hamClicked){
        if(Ham.classList.contains('open')){
          Ham.classList.remove('open')
          nav.classList.remove('open')
          nav.classList.add('close')
          
        }
        else{
          Ham.classList.add('open')
          nav.classList.remove('close')
          nav.classList.add('open')
        }
      }
      else{
        if(Ham.classList.contains('open')){
          Ham.classList.remove('open')
          nav.classList.remove('open')
          nav.classList.add('close')
          
        }
        else{
          
        }
      }
    }

  else {
    Ham.classList.add('open')
    nav.classList.remove('close')
    nav.classList.add('open')
  }

})
 