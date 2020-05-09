var timeAnimation = 3000;

var fillIcons = function() {
  $('.js-figure').each(function(){
    var $this = $(this),
        $rect = $this.find($('[class~="js-figure-fill"]')),
        valX = ((100 - parseFloat($rect.attr('data-percent'))) * parseFloat($rect.attr('width')) ) / 100,
        $animationDiv = $('<div></div>');

    $animationDiv.css('left', parseFloat($rect.attr('width')));
    $animationDiv.animate(
      {
        left: valX
      },
      {
        duration: timeAnimation,
        step: function(value, properties) {
          if (properties.prop === 'left') {
            $rect.attr('x', value);
          }
        }
      }
    );
  });
};

window.onload = function(){
  setInterval(fillIcons, timeAnimation*0.8);
  fillIcons();

$('.js-replay').on('click', function() {
   fillIcons();
});  
}


