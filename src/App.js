import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllBooks from './components/AllBooks';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav />
        <Welcome />
      </header>
        <AllBooks />
      <footer>
      <MyFooter />
      </footer>
    </div>
  );
}

export default App;
