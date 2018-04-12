/* RULES 
- Player is presented with title page and start option
- Countdown timer is started
- Player has 1 minute 30 seconds to answer all questions
- Player can click Done button under timer to go to scoring & answers section
- When timer ends, user is presented with score and cannot change answers (buttons disabled)
- Player is shown correct answers and theirs
- Player can re-start
*/

var response;
var output;
let userAnswers = {};
let userCorrect = 0;
const scoreBtn = document.getElementById('score');

document.querySelector('.start-game').addEventListener('click', startGame);

function startGame(e) {

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple`, true);

  
  xhr.onload = function() {
    if(this.status === 200) {
       response = JSON.parse(this.responseText);
       showQuestions(response);
       // Start timer

       // 
      }

    };

    xhr.send();
  
    e.preventDefault(); 
    } 
   
      function showQuestions(response) {
        output = '';
        let correctAnswers ={};
        for(i = 0; i< 10; i++){
          output += `
          <div class="card card-body mb-2">
            <div class="row" id="${i}">
              <div class="col-md-6">
                <h4 class = "h4">${i+1}.) ${response.results[i].question}</h4>
              </div>
              <div class="col-md-6" id="buttongroup">
              <button class="btn btn-secondary">${response.results[i].correct_answer}</button>
              <button class="btn btn-secondary">${response.results[i].incorrect_answers[0]}</button>
              <button class="btn btn-secondary">${response.results[i].incorrect_answers[1]}</button>
              <button class="btn btn-secondary">${response.results[i].incorrect_answers[2]}</button>           
              </div>
            </div>
          </di
        `;
        correctAnswers[i] = response.results[i].correct_answer;
        }
         // Output repos
         document.getElementById('questions').innerHTML = output;
         console.log(correctAnswers);

         // Collect correct answers
         $('button').on('click', function(e) {
           var currentQuestionID = $(this).closest('.row').prop('id');
           var playerAnswer = this.innerHTML;
           console.log('currect Question ID is ' + currentQuestionID);
           console.log('playerAnswer is ' + playerAnswer);
           userAnswers[currentQuestionID] = playerAnswer;
          
         })

         $('#done').on('click', function(e){
          $('#buttongroup').children.disabled = true;
           // WAIT - JUST COMPARE Key[0]= "Apollo" of one Object to Key[0] of UserAnswers = "Apollo" 
           // increment userCorrect count and display that as score
           // and compare userAnswers against correctAnswers
        // should be done when either time is up or user has hit stop button
        
        // need length of object, number of entries
        //const userAnsLen = userAnswers.(value).length;

       for(c = 0; c < 10; c++){
          if(correctAnswers[c] == userAnswers[c]) {
            userCorrect +=1;
          }
       }
       scoreBtn.innerHTML = `You got ${userCorrect} right`;
       scoreBtn.classList.add('btn-success');
       console.log(userCorrect);
       // Need to disable buttons in the button group

       // Need to reset the game


       // Need to tie in the timer
     });
  }



        
     

