const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
function upDateClock(){
  const clockContainer = document.querySelector('.clock');
clockContainer.innerHTML = new Date().toLocaleString('en-GB');
};
setInterval(upDateClock, 1000)


//                                              Таймер знищення
// const dalaySecs = 600;
// const startTime = new Date();
// function updateSelfDestruct(){
//   const selfDestractContainer = document.querySelector('.self-destruct');
//   const curentTime = new Date();
//   const elepsedTimeSec = Math.round((curentTime - startTime) / 1000);
//   const leftSecs = dalaySecs - elepsedTimeSec;
//   selfDestractContainer.innerText = leftSecs;
//   if(leftSecs < 1){
//     document.querySelector('body').innerHTML = '';
//   }
// }
// setInterval(updateSelfDestruct, 1000)


// function start(div_h1 , x , y){
//   document.querySelector(div_h1).textContent = x + y;
// }
// start('.div_h1', 3, 4)