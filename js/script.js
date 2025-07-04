//================= nav bar script start here ================== 
const nav = document.getElementById('nav')
let currentScroll = 0
window.addEventListener('scroll', () => {
    if(window.scrollY > currentScroll){
        nav.style.opacity = '0'
        setTimeout(() => {
            nav.style.display = 'none'
        }, 100)
    }else{
        nav.style.display = 'flex'
        setTimeout(() => {
            nav.style.opacity = '1'
        }, 100)
    }
    currentScroll = window.scrollY
})


//================= mobile menu script start here ================== 
const mobileMenuBtn = document.getElementById('mobile-menu-btn')
const mobileMenuList = document.getElementById('mobile-menu-lists')
const burgerIcon = document.querySelector('.burger-icon')
const xMarkIcon = document.querySelector('.x-mark-icon')
if(!mobileMenuList.style.display){
    mobileMenuList.style.display = 'none'
    xMarkIcon.style.display = 'none'
}
mobileMenuBtn.addEventListener('click', () => {

    if(mobileMenuList.style.display === 'block'){
        mobileMenuList.style.opacity = '0'
        burgerIcon.style.display = 'block'
        xMarkIcon.style.display = 'none'
        setTimeout(() => {
            mobileMenuList.style.display = 'none'
        }, 100)
    }else{
        mobileMenuList.style.display = 'block'
        xMarkIcon.style.display = 'block'
        burgerIcon.style.display = 'none'
        mobileMenuList.style.opacity = '0'
       setTimeout(() => {
        mobileMenuList.style.opacity = '1'
       }, 100)
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 768){
        mobileMenuList.style.display = 'none'
    }
})
//================= mobile menu script end here ================== 

//================= carousel script start here ================== 

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;

// generate dots
items.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= items.length) currentIndex = 0;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = items.length - 1;
  updateCarousel();
});

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  // update dots
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

//================= carousel script end here ================== 


