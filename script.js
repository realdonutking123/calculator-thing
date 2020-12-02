// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Calculator</h1>`;


function addNum(n) {
  const textarea = document.getElementById('output');
  textarea.value += n;
}