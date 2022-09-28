const Card = require('./card.js')

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

function ShowCard() { 
  return (
    <div class="card">
      <h2>{cards[current_card].title}</h2>
      <p>{cards[current_card].question}</p>
    </div>);
}

ReactDOM.render(<ShowCard />, app);

