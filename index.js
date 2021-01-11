/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  let t = parseInt(time.replace(':',''));
  if (t < 1200){
    return "Good Morning";
  } else if (t <= 1700 && t >= 1200){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

let greeting = document.getElementById('greeting');
function displayMessage(message) {
  greeting.innerText = message;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
