


let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  // Here we use Ternary operation
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  score.displayScore = function () {
    return `SCORECARD => Won : ${score.win} , Lost : ${score.lost} , Tie : ${score.tie} `;
  };

  DisplayResult();
}

let computerChoise;
function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
    // console.log('computer choise is Bat');
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
    // console.log('computer choise is Ball');
  } else {
    return "Stump";
    // console.log('computer choise is Stump');
  }
}

function getResult(userChoice, computerChoice) {
  if (userChoice === "Bat") {
    if (computerChoice === "Ball") {
      score.win++;
      // score.win = score.win + 1 ;
      return "You Won the Game";
    } else if (computerChoice === "Stump") {
      score.lost++;
      return "Computer Won the Game !!";
    } else {
      score.tie++;
      return "Game is Tie ";
    }
  } else if (userChoice === "Ball") {
    if (computerChoice === "Ball") {
      score.tie++;
      return "Game is Tie ";
    } else if (computerChoice === "Stump") {
      score.win++;
      return "You Won the Game";
    } else {
      score.lost++;
      return "Computer Won the Game !!";
    }
  } else {
    if (computerChoice === "Ball") {
      score.lost++;
      return "Computer Won the Game !!";
    } else if (computerChoice === "Stump") {
      score.tie++;
      return "Game is Tie ";
    } else {
      score.win++;
      return "You Won the Game";
    }
  }
}

function DisplayResult(userChoice, computerChoice, ResultMsg) {
  localStorage.setItem("Score", JSON.stringify(score));
  // document.querySelector('#User-Choice').innerText = ` User choose the ${userChoice}  `;

  document.querySelector("#User-Choice").innerText =
    // userChoice !== undefined ?  ` User choose the ${userChoice}  ` : '';
    // Truthy
    userChoice ? ` User choose the ${userChoice}  ` : "";
  // userChoice  || '';

  // document.querySelector('#Computer-Choice').innerText = ` Computer choice is ${computerChoice}  `;
  document.querySelector("#Computer-Choice").innerText =
    // computerChoice !== undefined ? ` Computer choice is ${computerChoice}  `: '';
    computerChoice ? ` Computer choice is ${computerChoice}  ` : "";
  // computerChoice || '';

  // document.querySelector('#Result').innerText = ResultMsg ;
  document.querySelector("#Result").innerText =
    // ResultMsg !== undefined ? ResultMsg : '' ;
    ResultMsg ? ResultMsg : "";
  // ResultMsg  || '' ;

  document.querySelector("#Score").innerText = score.displayScore();

  // alert(` User choose the ${userChoice}  and ${computerChoice} and final Result is : ${ResultMsg}
  //   ${score.displayScore()};
  //   `);
}
