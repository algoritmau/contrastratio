import { Header } from './components/Header';
import Hero from './components/Hero';
import { Instructions } from './components/Instructions';
import { ProTip } from './components/ProTip';
import { Contribute } from './components/Contribute';
import Footer from './components/Footer';
import logo from './logo.svg';
import './styles/App.sass';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
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
      <ProTip />
      <Contribute />
      <Footer />
    </div>
  );
}

export default App;
