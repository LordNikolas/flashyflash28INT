const app = document.getElementById("app")
      
function Header() {
    return <h1>Develop. Preview. 
        Ship, but not yet. :l 🚀</h1>;
  }
  
  function HomePage() {
    return (
      <div>
        <Header />
      </div>
    );
  }

  function CurrentCard() {
    return ( <h2> THIS IS A FLASH CARD </h2> );
  }

  function ShowCard() { 
    return (
      <div>
        <CurrentCard />
      </div>);
  }

ReactDOM.render(<CurrentCard />, app);

