window.onload = function() {
    let sec = 60;
    setInterval(function() {
      document.getElementById("timer").textContent = sec + 's';
      sec--;
      if (sec == 00) {
        sec = 60;
      }
    }, 1000);
  }