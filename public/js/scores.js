function loadScores(ascore){
  let str = ""
  ascore.forEach((item) => str += "<li>" + item.username + ": "+ item.score + "</li>")
  document.getElementById("highscores").innerHTML = str
  document.getElementById("highscores").className = "nes-list"
}

fetch("/getScores")
  .then(response => response.json())
  .then(getScores => {
    let scores = []
    getScores.forEach((score) => scores.push(score));
    return scores
  })
  .then(loadScores);
