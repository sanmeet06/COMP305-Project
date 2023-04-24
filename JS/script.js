let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

const submitBtn = document.querySelector('#submit-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    console.log("hello1");
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    console.log("hello2");
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
    console.log("hello3");
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');

    console.log("hello4");
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var swiper = new Swiper(".brand-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


const form = document.querySelector('#search-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission behavior
  const placeName = document.querySelector('#place-name').value;
  const adults = document.querySelector('#adults').value;
  const childrens = document.querySelector('#children').value;
  const arrivalDate = document.querySelector('#checkin').value;
  const leavingDate = document.querySelector('#checkout').value;
  const url = `https://www.airbnb.com/s/${placeName}/homes?adults=${adults}&checkin=${arrivalDate}&checkout=${leavingDate}&children=${childrens}`;
  window.open(url, '_blank'); // open URL in a new tab/window
});


  