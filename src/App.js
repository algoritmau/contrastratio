import { Header } from './components/Header';
import Hero from './components/Hero';
import ContrastChecker from './components/ContrastChecker';
import { Instructions } from './components/Instructions';
import { ProTip } from './components/ProTip';
import { Contribute } from './components/Contribute';
import Footer from './components/Footer';
import './styles/styles.sass';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <ContrastChecker />
      <Instructions />
      <ProTip />
      <Contribute />
      <Footer />
    </div>
  );
}

export default App;
