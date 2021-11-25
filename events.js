
// Component to make a popup window for the quiz.
AFRAME.registerComponent('listener1', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
            document.getElementById("btn").textContent = "Öffne Quiz1";
            document.getElementById("btn").onclick = Quiz1;    
    });
  }
});

     AFRAME.registerComponent('listener2', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
            document.getElementById("btn").textContent = "Öffne Quiz2";
            document.getElementById("btn").onclick = Quiz2;      
    }); }});

      AFRAME.registerComponent('listener3', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
            document.getElementById("btn").textContent = "Öffne Quiz3";
            document.getElementById("btn").onclick = Quiz3;      
    }); }});

      AFRAME.registerComponent('listener4', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
            document.getElementById("btn").textContent = "Öffne Quiz4";
            document.getElementById("btn").onclick = Quiz4;      
    }); }});

 
        function Quiz1() {           
            window.open("https://studycore.de/");
        }
         function Quiz2() {           
            window.open("https://google.de/");
         }
         function Quiz3() {           
            window.open("https://bing.de/");
         }
         function Quiz4() {           
            window.open("https://yahoo.de/");
         }
      
