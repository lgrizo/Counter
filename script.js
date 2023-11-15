var count = 0;

function changeCount(num) {
  count += num;
  document.getElementById("count").innerHTML = count;
}

function clearCount() {
  count = 0;
  document.getElementById("count").innerHTML = count;
}
