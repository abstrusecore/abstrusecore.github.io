$(document).ready(() =>{
  $('.projects').on('click', () => {
    if (parseInt(window.innerWidth) >= 640  || parseInt(window.clientWidth) < 640 ) {
      document.getElementById("me").src = "./images/Resume.png";
    } else {
      document.getElementById("me").src = "./images/longResume.png";
    }
    $('.contact').fadeToggle(700);
  });
  /* $('.notification').on('click', event => {
    $(event.currentTarget).toggleClass('active');
  })  */
});