document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nameHeader").onclick = function(){
        if (this.style.color == 'orange'){
            this.style.color = 'white';
        } else {
        this.style.color = 'orange';
        }
    }
    $( document ).ready(function() {
    $( "#fade" ).click(function() {
      $( "#fade" ).fadeOut( "slow", function() {
      });
    });
  });
});
