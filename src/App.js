import { Header } from './components/Header';
import Hero from './components/Hero';
import ContrastChecker from './components/ContrastChecker';
import { Instructions } from './components/Instructions';
import { Contribute } from './components/Contribute';
import Footer from './components/Footer.jsx';
import './styles/styles.sass';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <ContrastChecker />
      <Instructions />
      <Contribute />
      <Footer />
    </div>
  );
}

export default App;
