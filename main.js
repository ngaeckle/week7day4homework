const questionContainer = document.getElementById("question");
let totalcorrect = 0

console.log(questionContainer)

function createQuestiondiv(num, desc) {
  questionContainer.innerHTML += `
    <form>
    <div class="mb-3" id=${num - 1}>
      <h3>Question ${num}</h3>
      <p>${desc}</p>
      <div class="input-group input-group-sm mb-3">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          id="answer"
        />
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `
}

questions = [
    {
        question: '1+1',
        answer: '2'
    },
    {
        question: '2+2',
        answer: '4'
    },
    {
        question: '0+2',
        answer: '2'
    },
    {
        question: '0+0',
        answer: '0'
    }
]

let totalQuestions = 0

for (const question in questions){
    createQuestiondiv(parseInt(question) + 1, questions[question].question)
    totalQuestions++
}

const forms = questionContainer.querySelectorAll('form')
console.log(forms)

for (const question in questions){
    forms[question].addEventListener('submit', function (e) {
        e.preventDefault()
        const passedAnswer = forms[question].querySelector('#answer')
        if (passedAnswer.value === questions[question].answer){
            questionContainer.querySelectorAll('form')[question].style.backgroundColor='lightGreen'
            console.log(passedAnswer.value, "correct")
            updateH1()
        }else{
            console.log(passedAnswer.value, "incorrect")
            questionContainer.querySelectorAll('form')[question].style.backgroundColor='lightcoral'
        }
    })
}

my_h1 = document.getElementsByTagName('h1')
console.log(my_h1)


const updateH1 = () =>{
    my_h1[0].innerHTML = `
        You got ${totalcorrect}/${totalQuestions}
    `
    totalcorrect++
}

updateH1()