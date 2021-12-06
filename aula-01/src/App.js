import Greeting from './components/Greeting';

import './App.css';

function App() {
  const user = {
    firstName: 'Turma',
    lastName: '01'
  }

  const banana = {
    firstName: 'ban',
    lastName: 'ana'
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greeting user={banana} />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta adipisci repellendus impedit voluptatem illum explicabo rem dolorum, tempora, quibusdam dicta nihil. Sit libero corrupti voluptatum natus sint nam delectus nulla.</p>
        <Greeting user={user} />
      </header>
    </div>
  );
}

export default App;
