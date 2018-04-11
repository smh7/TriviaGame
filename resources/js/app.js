/* RULES 
- Player is presented with title page and start option
- Countdown timer is started
- Player has 1 minute 30 seconds to answer all questions
- Player can click Done button under timer to go to scoring & answers section
- When timer ends, user is presented with score and cannot change answers (buttons disabled)
- Player is shown correct answers and theirs
- Player can re-start
*/

// document.querySelector('.get-jokes').addEventListener('click', getJokes);
var response;

document.querySelector('.start-game').addEventListener('click', startGame);

function startGame(e) {
  // const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  // xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.open('GET', `https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple`, true);

  
  // xhr.open('GET', `https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple`, true);

  // API return for single question - start there for figuring out access
  // https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple
  
  xhr.onload = function() {
    if(this.status === 200) {
       response = JSON.parse(this.responseText);
      // for(i = 0; i < 10; i++)(
      //   let question1 = response.results[i].question;
      //   let answer1 = response.results[i].correct_answer;
      //   let incor0 = response.results[i].incorrect_answers[0];
      //   let incor1 = response.results[i].incorrect_answers[1];
      //   let incor2 = response.results[i].incorrect_answers[2];
        // output = 
      
      let output = '';
      console.log(this.response);
      console.log(response.results[0].question);
      let question1 = response.results[0].question;
      let answer1 = response.results[0].correct_answer;
      let incor0 = response.results[0].incorrect_answers[0];
      let incor1 = response.results[0].incorrect_answers[1];
      let incor2 = response.results[0].incorrect_answers[2];
      
      output = question1 + "<br>" + answer1 + "<br>" + incor0 + "<br>" + incor1 + "<br>" + incor2 + "<br><br>";
    //   if(response.type === 'success') {
    //     response.value.forEach(function(responseText){
    //       output += `<li>${this.responseText.question}</li>`;
    //     });
    //   } else {
    //     output += '<li>Something went wrong</li>';
    //   }

      document.querySelector('.questions').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault();
  };