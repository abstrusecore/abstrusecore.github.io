$(document).ready(() =>{
  $('.projects').on('click', () => {
    $('.contact').slideToggle(700);
  });

  $('#why').on('mouseover', event => {
    $(event.currentTarget).toggleClass('fun');
  }).on('mouseleave', event => {
    $(event.currentTarget).toggleClass('fun');})

  /* $('.notification').on('click', event => {
    $(event.currentTarget).toggleClass('active');
  })  */
});