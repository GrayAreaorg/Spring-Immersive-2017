WebFont.load({
  google: {
    families: ['Raleway']
  }
});

$(document).ready(function() {
  $('.content').clone().appendTo('.inverse');
  var $window = $(window);
  var $document = $(document);
  var $content = $('.content');
  var $inverse = $('.inverse');
  var $mainSplit = $('.main-split');
  var $splits = $('.split');
  var $squares = $('.square');

  var resizeContent = function() {
    $content.css('width', $window.width());
    $splits.css('width', $mainSplit.position().left + $mainSplit.width());
    $squares.css('height', $squares.first().innerWidth());
  }
  $window.resize(resizeContent);
  resizeContent();

  $inverse.css('width', $mainSplit.offset().left + $mainSplit.width());
  $inverse.css('height', Math.max($window.height(), $document.height()));
  setTimeout(function() {
    var resizeInverse = function(event) {
      $inverse.css('width', event.pageX);
      $inverse.css('height', Math.max($window.height(), $document.height()));
    }
    $window.mousemove(resizeInverse);
  }, 750);

  $('.avatar').tooltip({
    container: 'body',
    title: function() {
      return $(this).text();
    }
  });
});
