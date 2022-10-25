import './App.css';
import Info from './components/Info.js'
import About from './components/about.js'
import Interests from './components/interests.js'
import Footer  from './components/footer.js'


function App() {
  return (
    <div className="business-card-box">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
