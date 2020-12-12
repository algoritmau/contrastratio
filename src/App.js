import { Header } from './components/Header';
import { Instructions } from './components/Instructions';
import logo from './logo.svg';
import './styles/App.sass';

function App() {
  return (
    <div className='App'>
      <Header />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Instructions />
    </div>
  );
}

export default App;
