
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  const empresa = {
    nome: "Coffee O'clock"
  }
  return (
    <div className="App">
      <Header />
      <Banner>What time is it?</Banner>
      <Footer empresa={empresa}></Footer>
    </div>
  );
}

export default App;
