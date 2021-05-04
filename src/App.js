import { Header } from './components/Header'
import Hero from './components/Hero'
import ContrastChecker from './components/ContrastChecker'
import { Instructions } from './components/Instructions'
import { Contribute } from './components/Contribute'
import Footer from './components/Footer'

import './styles/base/reset.sass'
import './styles/globals.sass'
import './styles/styles.sass'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ContrastChecker />
      <Instructions />
      <Contribute />
      <Footer />
    </div>
  )
}
