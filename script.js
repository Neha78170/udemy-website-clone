// header ki liye
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const navbar = document.getElementById('navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.add('active');
     menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', () => {
    navbar.classList.remove('active');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  });


// slider ki liye

let flag = 0;

slideShow(flag);

function slideShow(num){
   let slides = document.querySelectorAll(".slides")   

   for(i of slides){
    i.style.display ="none"
   }

  if(num == slides.length){
    flag = 0;
    num = 0;
  }
  else if(num < 0){
    flag = slides.length-1;
    num = slides.length-1;
  }
  slides[num].style.display = "block"
}

    function arrow(num){
        flag = flag + num;
        slideShow(flag);
    }

   
let prev = document.querySelector(".prev").addEventListener("click",()=>{
    arrow(-1);
})
let next = document.querySelector(".next").addEventListener("click",()=>{
  arrow(1)
});