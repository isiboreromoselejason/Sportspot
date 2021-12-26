let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


let book_form = document.getElementById('book-form')
let location_name = document.getElementById('location_name')
let number_people = document.getElementById('number_people')
let date_arrival = document.getElementById('date_arrival')
let date_leaving = document.getElementById('date_leaving')

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


book_form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(location_name.value === "") {
    addError(location_name, 'Location name cannot be empty!')
  }else {
    removeError(location_name, "")
  }
  if(number_people.value === "") {
    addError(number_people, 'Number of persons cannot be empty!')
  }else {
    removeError(number_people, "")
  }
  if(date_arrival.value === "") {
    addError(date_arrival, 'Please add your arrival date!')
  }else {
    removeError(date_arrival, "")
  }
  if(date_leaving.value === "") {
    addError(date_leaving, 'Please add date of departure!')
  }else {
    removeError(date_leaving, "")
  }

  if(location_name.value && number_people.value && date_leaving.value && date_arrival.value !== "") {
    alert('Booking Successful!')
  }
})

function addError(field, message) {
  let error = field.nextElementSibling
  error.innerText = message
}
function removeError(field, message) {
  let error = field.nextElementSibling
  error.innerText = message
}