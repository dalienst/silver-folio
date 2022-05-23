import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Skills from './components/Skills';


function App() {
  return (
    <main className='main'>
      <Navbar/>
      <About/>
      <Skills/>
    </main>
  );
}

export default App;
