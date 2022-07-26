// let slides = document.getElementsByClassName('mySlides');
//   // console.log(slides); 
//   let activeIndex = 0; // setting the initial value


//   function showSlide(slideCounter) {
//     activeIndex += slideCounter; // increase or decrease the number of the picture 

//     if (activeIndex >= slides.length) { // after the picture#3, they jump to the 4th pic which is not existing. That's why it's necessary.
//       activeIndex = 0; // jump back to the 1st picture
//     } else if (activeIndex < 0) {
//       activeIndex = slides.length - 1; // jump to the last picture 
//     }

//     for (let i = 0; i < slides.length; i++) { // will hide all slides
//       slides[i].style.display = 'none';
//     }
//     slides[activeIndex].style.display = 'block';  // only show the active slide 
//   }

//   showSlide(activeIndex);
//   // 가장 처음에 켰을때 화면을 위해 처음에만 실행되기 위함.

// const upArrow = document.querySelector('.up_arrow');

// upArrow.addEventListener('click', ()=> {
//   window.onload=function() {
//     window.scrollTo(0,0);
//   }
// })

window.onload=function(){
  const upArrow = document.querySelector('.up_arrow');
  upArrow.addEventListener("click", ()=> {
    window.scrollTo(0,0);
});
}



