(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: " In a 200 metres race A beats B by 35 m or 7 seconds. A's time over the course is: ",
        answers: {
          a: "40 sec",
          b: "47 sec",
          c: "33 sec"
        },
        correctAnswer: "c"
      },
      {
        question: "How many meaningful English words can be formed with the letters EDOM using each letter only once in each word ?",
        answers: {
          a: "One",
          b: "None",
          c: "Two"
        },
        correctAnswer: "c"
      },
      {
        question: "The curved surface area of a cylindrical pillar is 264 m2 and its volume is 924 m3. Find the ratio of its diameter to its height.",
        answers: {
          a: "3:7",
          b: "7:3",
          c: "6:7",
          d: "7:6"
        },
        correctAnswer: "b"
      },
      {
        question: "The square root of 64009 is:",
        answers: {
          a: "253",
          b: "347",
          c: "363",
          d: "803"
        },
        correctAnswer: "a"
      },
      {
        question: "A car owner buys petrol at Rs.7.50, Rs. 8 and Rs. 8.50 per litre for three successive years. What approximately is the average cost per litre of petrol if he spends Rs. 4000 each year?",
        answers: {
          a: "Rs 7.98",
          b: "Rs 8",
          c: "Rs 8.50",
          d: "Rs 9"
        },
        correctAnswer: "a"
      },
      {
        question: "A man buys a watch for Rs. 1950 in cash and sells it for Rs. 2200 at a credit of 1 year. If the rate of interest is 10% per annum, the man:",
        answers: {
          a: "Rs 55 gain",
          b: "Rs 50 gain",
          c: "Rs 30 loss",
          d: "Rs 30 gain"
        },
        correctAnswer: "b"
      },
      {
        question: "The H.C.F. of two numbers is 23 and the other two factors of their L.C.M. are 13 and 14. The larger of the two numbers is:",
        answers: {
          a: "276",
          b: "299",
          c: "322",
          d: "345"
        },
        correctAnswer: "c"
      },
      {
        question: "The angle between the minute hand and the hour hand of a clock when the time is 4.20, is:",
        answers: {
          a: "0 degree",
          b: "10 degree",
          c: "5 degree",
          d: "20 degree"
        },
        correctAnswer: "b"
      },
      {
        question: "In how many ways can a group of 5 men and 2 women be made out of a total of 7 men and 3 women?:",
        answers: {
          a: "63",
          b: "163",
          c: "45",
          d: "55"
        },
        correctAnswer: "a"
      },
      {
        question: "The sum of two number is 25 and their difference is 13. Find their product.",
        answers: {
          a: "66",
          b: "114",
          c: "56",
          d: "23"
        },
        correctAnswer: "b"
      },


    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  