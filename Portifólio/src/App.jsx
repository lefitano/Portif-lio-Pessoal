import { Container } from 'react-bootstrap'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import FloatingIcons from './components/FloatingIcons'

function App() {
  return (
    <div className="app-bg">
      <FloatingIcons />
      <Container className="py-4">
        <Header />
        <hr className="divider" />
        <main>
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </main>
        <hr className="divider" />
        <Footer />
      </Container>
    </div>
  )
}

export default App
