$(document) .ready ( function () {
    alert ("WELCOME BACK FRIEND!");
    
        $("div.active").hover(function(){
            $(this).css ("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "pink");
          });
          
        $(":button").hover (function (){
          $(this).css("background-color", "grey"); },
          function(){
          $(this).css("background-color", "white");
       });
});

