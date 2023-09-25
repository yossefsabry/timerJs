window.onload = function () {
  function startTime() {
    let x = parseInt(prompt("Enter time in seconds"));

    if (isNaN(x) || x <= 0) {
      content.innerHTML = "Invalid!";
      return;
    }

    let seconds = x; // Move it here

    let timeInterval = setInterval(function () {
      let minutes = Math.floor((seconds % 3600) / 60);
      let hours = Math.floor(seconds / 3600);
      let remainingSeconds = seconds % 60;
      let setTime = seconds + minutes * 60 + hours * 3600;
      let startTImeNow = Date.now();
      let futureTime = startTImeNow + setTime;
      let currentTime = Date.now();
      let remainingTime = futureTime - currentTime;
      let cricle = document.querySelectorAll(".circle");
      let angle = ((setTime - remainingTime) / setTime) * 360;
      if (angle > 180) {
        cricle[2].style.display = "none";
        cricle[0].style.transform = "rotate(180deg)";
        cricle[1].style.transform = "rotate(" + angle + "deg)";
      } else {
        cricle[2].style.display = "block";
        cricle[0].style.transform = "rotate(" + angle + "deg)";
        cricle[1].style.transform = "rotate(" + angle + "deg)";
      }

      // Formatting the timer display
      if (seconds <= 0) {
        content.innerHTML = "Timer ended!";
        cricle[2].style.display = "block";
        cricle[1].style.display = "block";
        cricle[0].style.display = "block";
        clearInterval(timeInterval);
      } else {
        var formattedTime =
          (hours < 10 ? "0" + hours : hours) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ":" +
          (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);

        content.innerHTML = formattedTime;
        seconds--; // Update the value of seconds
        console.log(seconds);
      }
    }, 1000);
  }

  startTime();
};
