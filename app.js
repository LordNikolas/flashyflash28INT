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
  
ReactDOM.render(<HomePage />, app);