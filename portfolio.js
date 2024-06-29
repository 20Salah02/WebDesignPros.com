document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    console.log('ScrollY:', window.scrollY); 
    if (window.scrollY > 0) {
      console.log('Adding fixed class'); 
      nav.classList.add('fixed');
    } else {
      console.log('Removing fixed class'); 
      nav.classList.remove('fixed');
    }
  });
});
// 
/////////////SPLIT//////////////
{
  const myName = new SplitType('.f-description h2, h3')
  gsap.to(`.char`,{
  y : 0,
  stagger : 0.05,
  delay : 0.2,
  duration : .1,
})
}
//
///////SCROLL REVEAL//////////
ScrollReveal().reveal('#f-title', {
  delay: 300, 
  duration: 1800, 
  scale:0.80,
  easing: 'ease-out', 
  reset: false ,
});
ScrollReveal().reveal('.imgIntro', {
  delay: 300, 
  duration: 1800, 
  scale:0.90,
  easing: 'ease-out', 
  reset: false ,
});

ScrollReveal().reveal('.imgSer', {
  delay: 300, 
  duration: 1800, 
  scale:0.80,
  easing: 'ease-out', 
  reset: false ,
});

ScrollReveal().reveal('.imgCome', {
  delay: 300, 
  duration: 1800,
  origin: 'left', 
  distance: '65px', 
  easing: 'ease-out', 
  reset: false ,
});
ScrollReveal().reveal('.e-comerce', {
  delay: 300, 
  duration: 1800,
  origin: 'bottom', 
  distance: '65px', 
  easing: 'ease-out', 
  reset: false 
});
ScrollReveal().reveal('.portfolio', {
  delay: 300, 
  duration: 1800,
  origin: 'left', 
  distance: '65px', 
  easing: 'ease-out', 
  reset: false 
});
ScrollReveal().reveal('#imgPor', {
  delay: 300, 
  duration: 1800,
  origin: 'bottom', 
  distance: '65px', 
  easing: 'ease-out', 
  reset: false 
});
ScrollReveal().reveal('.about-descr p', {
  delay: 300, 
  duration: 1800,
  origin: 'left', 
  distance: '65px', 
  easing: 'ease-out', 
  reset: false 
});
ScrollReveal().reveal('.about-descr ul', {
  delay: 300, 
  duration: 1800,
  origin: 'right', 
  distance: '65px', 
  easing: 'ease-out', 
  reset: false 
});

