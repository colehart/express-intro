const toggleColor = () => {
  $('.js-header').toggleClass('red')
}

$('.js-button').on('click', toggleColor);
