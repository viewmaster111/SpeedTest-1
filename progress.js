function move() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 1);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      window.location = "http://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_progressbar_label_js";
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
    
  }
}
