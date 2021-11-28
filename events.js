
        function Quiz0() {           
            window.alert("Richte die Kamera auf einen Marker bis ein Modell erscheint \n Berühre mit dem mittleren Kreis ein Modell \n Danach lässt sich ein Quizfenster öffnen \n Rotation und Skalierung der Modelle anhand Tocuh Bwegung möglich" );
        }
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
         function Quiz5() {           
            window.open("https://bing.de/");
         }
         function Quiz6() {           
            window.open("https://yahoo.de/");
         }

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

  AFRAME.registerComponent('listener5', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
            document.getElementById("btn").textContent = "Öffne Quiz5";
            document.getElementById("btn").onclick = Quiz5;      
    }); }});

      AFRAME.registerComponent('listener6', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
            document.getElementById("btn").textContent = "Öffne Quiz6";
            document.getElementById("btn").onclick = Quiz6;      
    }); }});

    AFRAME.registerComponent('bugfix', {
  init: function () {
    this.el.addEventListener('mouseenter', function (evt) {
           document.getElementById("btn").textContent = "Instructions";
            document.getElementById("btn").onclick = Quiz0;        
    }); }});


   
document.getElementById("btn").textContent = "Test";
document.getElementById("btn").onclick = Quiz5; 
      
