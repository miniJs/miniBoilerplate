$(function() {
  // Code samples syntax highliting
  prettyPrint();

  // Share the glory 
  setTimeout(function() {
    
    $('#twitter-widget').css({top: '-=20', opacity: 0})
                        .show()
                        .animate({opacity: 1, top: "+=20"}, 100, 'swing')
  }
  , 1000);
});
