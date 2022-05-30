//============================ Admission Open For AY 2021-2022 ======================

const d = new Date();
let year = d.getFullYear();
let y = year - 1;
let yy = year+1;
var month = d.getMonth();
/*
current year= 2022
if(n<5)= 2021-2022
else =2022-2023
next year 2023
if(n<5)= 2022-2023
 */

if (month <=5) {
  document.getElementById("AY").innerHTML = "Admission Open For AY " + y + "-" + year;
document.getElementById("AO").innerHTML="Admissions Open for Academic Year "+y+"-"+year+" | Call us for more details on +91 9881 21 19 13 || Best A.N.M College in Vidharbha at Lonar(Buldhana) Maharashtra"
}
else{
  document.getElementById("AY").innerHTML = "Admission Open For AY " + year + "-" + yy;
  document.getElementById("AO").innerHTML="Admissions Open for Academic Year "+year+"-"+yy+" | Call us for more details on +91 9881 21 19 13 || Best A.N.M College in Vidharbha at Lonar(Buldhana) Maharashtra"
  
}

document.getElementById("year").innerHTML=year;

//============================ sticky navbar ======================
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


//============================ menu btn possition fixed ======================


document.getElementById("click").addEventListener("change", () => {
  if (document.getElementById("click").checked) {
    document.querySelector("body").style.position = "fixed";
  } else {
    document.querySelector("body").style.position = "static";
  }
});

//============================ slide show ======================

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}