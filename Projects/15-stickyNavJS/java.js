const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;
const data = document.querySelector('.site-wrap');
 

function navFix(){
    if (window.scrollY >= topOfNav) {
        // document.body.style.paddingTop = `${nav.offsetHeight}px`;
        data.style.paddingTop = `${40+nav.offsetHeight}px`;
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
        data.style.paddingTop = `${40}px`;
      }
}
window.addEventListener("scroll",navFix); 