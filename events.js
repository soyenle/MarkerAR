/*  Component to make a popup window for the quiz.
AFRAME.registerComponent('listener1', {
  init: function () {
    document.getElementById("bowser-model1").addEventListener('mouseenter', function (evt) {
        var doc = document.getElementById("btn");             
            // Changing the text content
            doc.textContent = "Öffne Quiz1";
            document.getElementById("btn").onclick = Quiz1;    
    });
*/

AFRAME.registerComponent('markerhandler1', {
         tick:function() {
         if(document.querySelector("a-marker").object3D.visible == true) {
             
         document.getElementById("btn").textContent = "Apfel Bein Stein Stuhl Gold Auto Prüfung DNA Flasche Türkei Fenster"; 
         } else {
         document.getElementById("btn").textContent = ""; 
      }
   }
});
    
AFRAME.registerComponent('markerhandler2', {
         tick:function() {
         if(document.querySelector("a-marker").object3D.visible == true) {
             
         document.getElementById("btn").textContent = "ABCDEFG"; 
         } else {
         document.getElementById("btn").textContent = ""; 
      }
   }
});

       
 


  
      
