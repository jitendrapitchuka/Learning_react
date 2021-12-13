import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
   
<Navbar title="Text conversion"/>
<div className='container my-5' >
<TextForm heading="Enter the text"/>
{/* <About/> */}
</div>

   </>
  );
}

export default App;
