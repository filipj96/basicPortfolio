$(document).ready(function(){

    /* Fade på indextiteln */
  $(".title").hide(0).delay(500).fadeIn(1500)

  /* 
  $("#features").fadeIn()
.css({top:1000,position:'absolute'})
.animate({top:275}, 800, function() {
}); 
*/
   
   
   
    $(".navIcon").click(function () {

        $(".navCont").show(200);
    
    });
    
    $(".closeNav").click(function () {
    
        $(".navCont").hide(200);
    
    });








/*

 PORTFOLIO

 */

/* Bildspel */

var bildSpel = [
    "bilder/bild1.jpg",
    "bilder/bild2.jpg",
    "bilder/bild3.jpg",
    "bilder/bild4.jpg"
  ];

  
  var currentIndex = 0;
  function visaBild() {
    var img = document.getElementById("bildSpel");
    if (img) {
      img.setAttribute("src", bildSpel[currentIndex]);
      currentIndex++;
      if (currentIndex === bildSpel.length) {
        currentIndex = 0;
      }
    }
  }

  var bildspelIntervalId = null;
  startaBildspel();
  function startaBildspel() {
    visaBild();
    bildspelIntervalId = setInterval(visaBild, 2000);
  }

function stopBildspel() {
    clearInterval(bildspelIntervalId);
    bildspelIntervalId = null;
}
function toggleBildspel() {
  var toggleKnapp = document.getElementById("pauseKnapp");
  if (bildspelIntervalId) {
    stopBildspel();
    toggleKnapp.setAttribute("src", "bilder/play.png");
  } else {
    startaBildspel();
    toggleKnapp.setAttribute("src", "bilder/pause.png");
  }
}

var pauseknapp = document.getElementById("pauseKnapp");
if (pauseknapp) {
  pauseknapp.addEventListener("click", toggleBildspel);
}





/*

OM OSS

*/

/* Knapp till respektive profilsida */
document.getElementById("fille").onclick = function (){

        location.href = "filip.html";

}

document.getElementById("alle").onclick = function (){

    location.href = "alice.html";

}

document.getElementById("billen").onclick = function (){

    location.href = "bill.html";

}

document.getElementById("julle").onclick = function (){

    location.href = "julia.html";

}

    

});



/*

PROFIL

*/

/* Anemering till bar */
function barAnimering(value, barId){

  var elem = document.getElementById(barId);
  if(elem){
      var width = 10;
      var id = setInterval(fill, 20);
      function fill(){
          if(width >= value){
              clearInterval(id);
             } else{
              width ++;
              elem.style.width = width + '%';
              elem.innerHTML = width * 1 + '%';

             }

      }

  }

}

barAnimering(100, "javaBarFilip");
barAnimering(100, "htmlBarFilip");
barAnimering(100, "cssBarFilip");

barAnimering(65, "javaBarAlice");
barAnimering(80, "htmlBarAlice");
barAnimering(100, "cssBarAlice");

barAnimering(69, "javaBarJulia");
barAnimering(100, "htmlBarJulia");
barAnimering(50, "cssBarJulia");

barAnimering(50, "java");
barAnimering(70, "html");
barAnimering(80, "css");

/*

KONTAKTA OSS

*/


/* Validerar förnamn i form med regular expressions och varnar om formatkraven inte möts */
function validerafnamn() {
    var regName = /^[a-öA-Ö]{2,50}$/;
    var fname = document.getElementById("fnamn").value;
    if (!regName.test(fname)) {
      alert("Förnamn måste anges med 2 till 50 bokstäver.");
      document.getElementById("fnamn").focus();
      return false;
    } else {
      return true;
    }
  }
  

  /* Validerar efternamn i form med regular expressions och varnar om formatkraven inte möts */
  function valideraenamn() {
      var regName = /^[a-öA-Ö]{2,50}$/;
      var fname = document.getElementById("enamn").value;
      if (!regName.test(fname)) {
        alert("Efternamn måste anges med 2 till 50 bokstäver.");
        document.getElementById("enamn").focus();
        return false;
      } else {
        return true;
      }
    }