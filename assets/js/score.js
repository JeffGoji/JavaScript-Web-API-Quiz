function printHighscores() {
  // either get scores from localstorage or set to empty array
  let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // sort highscores by score property in descending order
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    // create li tag for each high score
    var liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    // display highscores on page
    let olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
  });
}
//clears the highscore in local storage.
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

// run function when page loads
printHighscores();
