function Card (title, question, answer) {
  this.title = title;
  this.question = question;
  this.answer = answer;
}

const app = document.getElementById("app");

let current_card = 0;

const cards = [
  new Card(
    "Question 1",
    "Is React a framework or a library?",
    "library",
  ),
  new Card(
    "Question 2",
    "Is NextJS a framework or a library?",
    "framework",
  ),
  new Card(
    "Question 3",
    "Is React a framework or a library?",
    "library",
  ),
];

function handleNextClick() {
  current_card++
}
function handlePreviousClick() {
  current_card--
}
function handleSubmitClick() {
  current_card++
  console.log(current_card);
  if (current_card === cards.length) {
    current_card = 0;
  }
  ReactDOM.render(<ShowScreen />, app);
}


function ShowCard() { 
  return (
    <div className="card">
      <h2>{cards[current_card].title}</h2>
      <p>{cards[current_card].question}</p>
    </div>
  );
}

function ShowInput() { 
  return (
    <div className="input">
      <input type="text"></input>
    </div>
  );
}

function ShowSubmitButton() {
  return (
    <div className="button">
      <button onClick={handleSubmitClick}>Next</button>
    </div>
  );
}

function ShowScreen() {
  return (
    <div className="main-body">
      <ShowCard />
      <br></br>
      <ShowInput />
      <br></br>
      <ShowSubmitButton />
    </div>
  );
}

ReactDOM.render(<ShowScreen />, app);

