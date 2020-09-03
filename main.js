$(document).ready(() =>{

  $('.projects').on('click', () => {
    if (parseInt(window.innerWidth) >= 640  || parseInt(window.clientWidth) < 640 ) {
      document.getElementById("me").src = "./images/Resume.png";
    } else {
      document.getElementById("me").src = "./images/longResume.png";
    }
    $('.contact').slideToggle(700);

  });

  $('.mail').on('click', () => {
    if (parseInt(window.innerWidth) >= 640  || parseInt(window.clientWidth) < 640 ) {
      $('#email').fadeToggle();
    } else {
      $('#email').slideToggle();
    }

  });

  $('.jumbotron').slideDown(1250);
  $('.nav-item').fadeIn(1250);

  $('#toggle').on('mousedown', () => {
    document.getElementById("bImg").src = "./images/collapse2.png";
  }).on('mouseup', () => {
    document.getElementById("bImg").src = "./images/collapse1.png";
  });

  $('#toggle').on('touchstart', () => {
    console.log("touch");
    document.getElementById("bImg").src = "./images/collapse2.png";
  }).on('touchend', () => {
    document.getElementById("bImg").src = "./images/collapse1.png";
  });

  /* $('.notification').on('click', event => {
    $(event.currentTarget).toggleClass('active');
  })  */
});