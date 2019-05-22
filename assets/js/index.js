 $(document).ready(function(){
   // image hover effect
   $(".hover-item").mousemove(function(e){
     var hiddenElement = $(e.currentTarget).find('.hover-item-show');
     var hiddenElementHeight = $(hiddenElement).height();
     var isMouseAboveHalfScreen = e.clientY < ($(window).height()/ 2);
     var top;

     // dont adjust position of item for title hover
     if ($(e.currentTarget).is("#journalTitle")) {
       top = e.pageY;
     }
     else if (isMouseAboveHalfScreen) {
       top = e.pageY - 120;
     }
     else {
       top = e.pageY - ((hiddenElementHeight / 2) + 140);
     }

     $(hiddenElement).css({
        top:   top,
        left:  e.pageX + 16
     });
   });
 });
