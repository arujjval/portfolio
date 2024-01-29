import './App.css'
import Topbar from './components/shared/Topbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'

function App() {

  return (
    <>
      <div className='flex flex-col gap-20'>
        <Topbar />
        <Home />
        <About /> 
        <Projects />
        <Contact />
        <Footer />
      </div> 
    </>
  )
}

export default App