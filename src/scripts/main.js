///////////////////////////
////////THEME SWITCH///////
///////////////////////////
const body = document.querySelector('body');
const switcher = document.querySelector('.switch-input')
const currentTheme = localStorage.getItem("theme")
const currentDataTheme = body.getAttribute('data-theme');


if(currentDataTheme == '' && currentTheme == ''){
  body.setAttribute('data-theme', 'dark')
  localStorage.setItem("theme", 'dark')
}
else if(currentDataTheme == '' && currentTheme == 'dark'){
  body.setAttribute('data-theme', 'dark')
  localStorage.setItem("theme", 'dark')
}
else if(currentDataTheme == '' && currentTheme == 'light'){
  body.setAttribute('data-theme', 'light')
  localStorage.setItem("theme", 'light')
}


window.addEventListener('DOMContentLoaded', ()=>{
  const open = localStorage.getItem("opened")
  if(open == null  && currentTheme == null){
    localStorage.setItem("theme", 'dark')
  }
  
  body.setAttribute('data-theme', currentTheme)
})



switcher.addEventListener('click', ()=>{
  const currentDataTheme = body.getAttribute('data-theme')
  if(currentDataTheme == 'light'){
    body.setAttribute('data-theme', 'dark')
    localStorage.setItem("theme", 'dark')
    localStorage.setItem("opened", 'true')
  }else{
    body.setAttribute('data-theme', 'light')
    localStorage.setItem("theme", 'light')
    localStorage.setItem("opened", 'true')
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

  





//Get the button:
topButton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
topFunction = ()=> {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
 